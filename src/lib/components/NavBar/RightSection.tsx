import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SunIcon, Bars3Icon } from "@heroicons/react/24/solid";

import HamburgerMenu from "./Menus/HamburgerMenu";
import UserDropDown from "./DropDowns/UserDropDown";
import SettingsDropDown from "./DropDowns/SettingsDropDown";

const RightSection = () => {
  const location = useLocation();

  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const openMenu = () => {
    setIsOpened(true);
  };

  const closeMenu = () => {
    setIsOpened(false);
  };

  React.useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <section className="justify-self-end col-start-3">
      <section className="hidden xl:flex gap-8 cursor-pointer">
        <SunIcon className="h-6 w-6" />
        <SettingsDropDown />
        <UserDropDown />
      </section>
      <section className="flex gap-8 xl:hidden">
        <Bars3Icon className="cursor-pointer h-6 w-6" onClick={openMenu} />
        <AnimatePresence>
          {isOpened ? (
            <motion.div
              exit={{ y: "-100%" }}
              animate={{ y: 0 }}
              initial={{ y: "-100%" }}
              transition={{ bounce: false }}
              className="z-50 absolute top-0 left-0 w-full h-full"
            >
              <HamburgerMenu close={closeMenu} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>
    </section>
  );
};

export default RightSection;
