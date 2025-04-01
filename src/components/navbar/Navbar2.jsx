import React from "react";
import { menu } from "../../mockdata/navmenu";
import BellIcon from "../../assets/icons/BellIcon";
import UnfireIcon from "../../assets/icons/UnfireIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import { useUser } from "@clerk/clerk-react";
import UserProfile from "../userprofile/UserProfile";
import { useState } from "react";

 
const Navbar2 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { user, isSignedIn } = useUser();
   const toggleUserProfile = () => {
     setIsClicked((prev) => !prev);
   };
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
        <div onClick={toggleUserProfile} className="cursor-pointer">
          <ProfileIcon className="size-8 text-blue-200 hover:text-white" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-blue-200 text-2xl hover:text-white">Sign in</div>
        <p className="text-blue-200 text-xl">or</p>
        <div className="text-blue-200 text-2xl hover:text-white">Sign up</div>
      </div>
      {/* UserProfile Popup */}
      {isClicked && (
        <div className="absolute top-[35px] right-16 z-50">
          <UserProfile />
        </div>
      )}
    </div>
  );
};

export default Navbar2;
