import { List, Plane, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import NavbarRoutes from "../navbar-routes";


const MobileNavbar = () => {
  return ( 
    <div className="bg-white">
      <Sheet>
        <SheetTrigger><List /></SheetTrigger>
        <SheetContent side={"left"} className="bg-white">
          <SheetHeader>
            <SheetTitle><Plane /></SheetTitle>
            <div>
              <NavbarRoutes />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
   );
}
 
export default MobileNavbar;