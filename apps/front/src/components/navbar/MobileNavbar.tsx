import { PropsWithChildren } from "react";
import SideBar from "../sidebar/sidebar";
import { Menu } from "lucide-react";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden bg-transparent h-auto relative z-10">
      <SideBar
        triggerIcon={<Menu color="white" className="w-7 h-7"></Menu>}
        
      >
        {props.children}
      </SideBar>
    </div>
  );
};

export default MobileNavbar;
