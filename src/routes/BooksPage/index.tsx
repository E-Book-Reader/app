import React from "react";
import { Outlet } from "react-router-dom";

import Filter from "../../lib/components/Filter";

const Books = () => {
  return (
    <div className="w-full h-full flex flex-col gap-16 items-start justify-start">
      <Filter />
      <Outlet />
    </div>
  );
};

export default Books;
