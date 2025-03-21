import React from "react";
import PanelIcons from "../../assets/icons/PanelIcons";
import NewTabIcon from "../../assets/icons/NewTabIcon";
import LeftIcon from "../../assets/icons/LeftIcon";
import RightIcon from "../../assets/icons/RightIcon";
import RandomPickIcon from "../../assets/icons/RandomPickIcon";
import PlaceHolder from "../../assets/icons/PlaceHolder";
import AlarmClock from "../../assets/icons/AlarmClock";
import NotesIcon from "../../assets/icons/NotesIcon";
import LayoutIcon from "../../assets/icons/LayoutIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import UnfireIcon from "../../assets/icons/UnfireIcon";
import FireIcon from "../../assets/icons/FireIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";

const Navbar = () => {
  return (
    <div className="mx-auto flex h-16 items-center gap-8 px-4 justify-between bg-white font-sans font-medium">
      {/* left side */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <PlaceHolder className="size-8 mr-2" />
          <div className="w-[1px] h-6 bg-gray-300"></div>
        </div>
        <div className="flex items-center group relative">
          <div className="flex items-center gap-x-2 p-2 rounded-l-lg transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-md">
            {/* Expand Panel Icon */}
            <PanelIcons className="size-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />

            {/* Text with Smooth Hover Transition */}
            <div className="relative flex items-center cursor-pointer w-24">
              <p className="absolute left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                Problem List
              </p>
              <p className="absolute left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Problem...
              </p>

              {/* New Tab Icon */}
              <NewTabIcon className="absolute right-0 size-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <LeftIcon className="size-10 text-gray-700 p-2.5 group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
          <RightIcon className="size-10 text-gray-700 p-2.5 group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
          <RandomPickIcon className="size-10 text-gray-700 p-2.5 rounded-r-lg group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
        </div>
      </div>

      {/* mid side */}
      <div className="flex items-center gap-2">
        <AlarmClock className="size-9 text-gray-700 p-2 rounded-lg bg-gray-100 shadow-md" />
        <NotesIcon className="size-9 text-gray-700 p-2 rounded-lg bg-gray-100 shadow-md" />
      </div>

      {/* right side */}
      <div className="flex items-center gap-1">
        <LayoutIcon className="size-9 text-gray-700 p-2 rounded-lg hover:bg-gray-100 hover:shadow-md" />
        <SettingIcon className="size-9 text-gray-700 p-2 rounded-lg hover:bg-gray-100 hover:shadow-md" />
        <div className="flex items-center group relative h-9 w-10 gap-1 rounded-lg hover:bg-gray-100 hover:shadow-md p-1 transition-all">
          <UnfireIcon className="absolute left-1 size-6 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
          <FireIcon className="absolute left-1 size-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <p className="absolute right-1 text-gray-700 text-sm font-medium">
            0
          </p>
        </div>
        <ProfileIcon className="size-6" />
      </div>
    </div>
  );
};

export default Navbar;
