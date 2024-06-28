import MobileNavbar from "./navbars/MobileNavbar";
import MainNavbar from "./navbars/MainNavbar";

const Navbar = () => {

  return (
    <div>
      <div className="block md:hidden fixed top-0 left-0 z-0 bg-white w-full p-2">
        <MobileNavbar />
      </div>
      <div className="hidden md:block ">
        <MainNavbar />
      </div>
    </div>
  );
};

export default Navbar;
