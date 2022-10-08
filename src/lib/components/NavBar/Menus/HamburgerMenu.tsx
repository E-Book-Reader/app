import { Link } from "react-router-dom";
import {
  XMarkIcon,
  UserIcon,
  MoonIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import { MainContextWrapper } from "../../../contexts";

interface HamburgerMenuProps {
  close: () => void;
}

const HamburgerMenu = MainContextWrapper<HamburgerMenuProps>(
  ({ mainContext, close }) => {
    const handleClick = () => {
      close();
    };

    return (
      <div className="flex flex-col items-center justify-center gap-16 bg-orange-400 h-full w-full">
        <XMarkIcon
          className="fill-white cursor-pointer w-16 h-w-16 absolute top-32 right-32"
          onClick={handleClick}
        />
        <ul className="flex flex-col items-center justify-center gap-16">
          <Link
            to={
              mainContext.content.user
                ? "/users/" + mainContext.content.user?.id
                : "/login"
            }
            className="flex gap-2 items-center justify-center cursor-pointer font-bold text-white text-4xl"
          >
            <UserIcon className="h-8 w-8" />
            {mainContext.content.user
              ? mainContext.content.user?.username
              : "Login"}
          </Link>
          <Link
            to={"/articles"}
            className="flex gap-2 items-center justify-center cursor-pointer font-bold text-white text-4xl"
          >
            Articles
          </Link>
          <Link
            to={"/books"}
            className="flex gap-2 items-center justify-center cursor-pointer font-bold text-white text-4xl"
          >
            Books
          </Link>
          <Link
            to={"/settings"}
            className="flex gap-2 items-center justify-center cursor-pointer font-bold text-white text-4xl"
          >
            <AdjustmentsHorizontalIcon className="h-8 w-8" />
            Settings
          </Link>
          <Link
            to={"/enable-night-mode"}
            className="flex gap-2 items-center justify-center cursor-pointer font-bold text-white text-4xl"
          >
            <MoonIcon className="h-8 w-8" />
            Night Mode
          </Link>
        </ul>
      </div>
    );
  }
);

export default HamburgerMenu;
