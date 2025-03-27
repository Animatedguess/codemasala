import React from "react";
import { menu } from "../../mockdata/navmenu";
import BellIcon from "../../assets/icons/BellIcon";
import UnfireIcon from "../../assets/icons/UnfireIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";

const Navbar2 = () => {
  return (
    <div className="w-full h-[74px] bg-blue-950 flex items-center justify-between px-16">
      <div>
        <div>{/* logo */}</div>
        <div className="flex item-center justify-center gap-5">
          {menu.map((item) => (
            <div
              key={item.id}
              className="text-2xl text-blue-200 p-5 hover:text-white"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex item-center gap-5">
        <BellIcon className="size-8 text-blue-200 hover:text-white" />
        <UnfireIcon className="size-8 text-blue-200 hover:text-white" />
        <ProfileIcon className="size-8 text-blue-200 hover:text-white" />
      </div>
    </div>
  );
};

export default Navbar2;
