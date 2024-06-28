import clsx from "clsx";
import { Plane } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NavbarRoutes from "../navbar-routes";

const MainNavbar = () => {
  const location = useLocation();

  return (
    <div className="flex w-full font-semibold">
      <nav className="flex justify-between items-center w-full  md:text-lg">
        <div className="">
          <Plane className="hidden md:block h-10 w-10 text-green-500" />
        </div>
        <div className="grid grid-cols-5 space-x-6 border-b border-sky-500">
          <NavbarRoutes />
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default MainNavbar;
