import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex w-full">
      <nav className="flex justify-between items-center w-full  text-lg">
        <div>logo</div>
        <div className="grid grid-cols-5 space-x-6 border-b border-sky-500">
          <Link
            className={clsx("p-5 flex justify-center", {
              "border-b-2 border-sky-600": location.pathname === "/",
            })}
            to="/"
          >
            Home
          </Link>
          <Link
            className={clsx("p-5 flex justify-center", {
              "border-b-2 border-sky-600": location.pathname === "/about",
            })}
            to="/about"
          >
            About
          </Link>
          <Link
            className={clsx("p-5 flex justify-center", {
              "border-b-2 border-sky-600": location.pathname === "/tour",
            })}
            to="/tour"
          >
            Tour
          </Link>
          <Link
            className={clsx("p-5 flex justify-center", {
              "border-b-2 border-sky-600": location.pathname === "/contact",
            })}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={clsx("p-5 flex justify-center", {
              "border-b-2 border-sky-600": location.pathname === "/destination",
            })}
            to="/destination"
          >
            Destination
          </Link>
        </div>
        <div>logo</div>
      </nav>
    </div>
  );
};

export default Navbar;
