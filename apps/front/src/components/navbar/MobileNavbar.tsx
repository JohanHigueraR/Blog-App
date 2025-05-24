import { PropsWithChildren } from "react";

import SideBar from "../sidebar/sidebar";
import { Menu } from "lucide-react";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden">
      <SideBar
        triggerIcon={<Menu color="white" className="w-4"></Menu>}
        triggerClassName="absolute top-2 left-2"
      >
        {props.children}
      </SideBar>
    </div>
  );
};

export default MobileNavbar;
