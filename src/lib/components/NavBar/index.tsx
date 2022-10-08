import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import MiddleSection from "./MiddleSection";
import { ViewContextWrapper } from "../../contexts";
import { useLocation } from "react-router-dom";
import React from "react";

const Navbar = ViewContextWrapper(({ viewContext }) => {
  const location = useLocation();

  React.useEffect(() => {
    viewContext.setContent({ ...viewContext.content, navbar: undefined });
  }, [location]);

  return (
    <nav className="py-4 flex justify-between xl:grid grid-cols-3 items-center">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </nav>
  );
});

export default Navbar;
