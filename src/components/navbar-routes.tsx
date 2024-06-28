import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

const NavbarRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Link
        className={clsx("p-5 flex justify-center", {
          "border-b-2 border-sky-600 text-sky-500": location.pathname === "/",
        })}
        to="/"
      >
        Home
      </Link>
      <Link
        className={clsx("p-5 flex justify-center", {
          "border-b-2 border-sky-600 text-sky-500":
            location.pathname === "/about",
        })}
        to="/about"
      >
        About
      </Link>
      <Link
        className={clsx("p-5 flex justify-center", {
          "border-b-2 border-sky-600 text-sky-500":
            location.pathname === "/tour",
        })}
        to="/tour"
      >
        Tour
      </Link>
      <Link
        className={clsx("p-5 flex justify-center", {
          "border-b-2 border-sky-600 text-sky-500":
            location.pathname === "/contact",
        })}
        to="/contact"
      >
        Contact
      </Link>
      <Link
        className={clsx("p-5 flex justify-center", {
          "border-b-2 border-green-600 text-green-500":
            location.pathname === "/destination",
        })}
        to="/destination"
      >
        Destination
      </Link>
    </>
  );
};

export default NavbarRoutes;
