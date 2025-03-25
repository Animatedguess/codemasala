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
    <div className="mx-auto flex h-16 py-6 w-full items-center px-4 md:px-6 justify-between font-sans font-medium bg-white shadow-md">
      {/* Left side */}
      <div className="flex items-center w-1/4 sm:w-1/5">
        <div className="flex items-center">
          <PlaceHolder className="size-7 sm:size-8 mr-2" />
          <div className="w-[1px] h-6 bg-gray-300"></div>
        </div>
        <div className="hidden md:flex items-center group relative">
          <div className="flex items-center gap-x-2 p-2 rounded-l-lg transition-all duration-300 group-hover:bg-gray-100 group-hover:shadow-md">
            <PanelIcons className="size-5 sm:size-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
            <div className="relative flex items-center cursor-pointer w-20 sm:w-24">
              <p className="absolute left-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0">Problem List</p>
              <p className="absolute left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Problem...</p>
              <NewTabIcon className="absolute right-0 size-5 sm:size-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <LeftIcon className="size-8 sm:size-10 text-gray-700 p-2.5 group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
          <RightIcon className="size-8 sm:size-10 text-gray-700 p-2.5 group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
          <RandomPickIcon className="size-8 sm:size-10 text-gray-700 p-2.5 rounded-r-lg group-hover:bg-gray-100 group-hover:shadow-md transition-all duration-300" />
        </div>
      </div>

      {/* Middle section - Hidden on smaller screens */}
      <div className="hidden sm:flex items-center gap-2">
        <AlarmClock className="size-8 sm:size-9 text-gray-700 p-2 rounded-lg bg-gray-100 shadow-md" />
        <NotesIcon className="size-8 sm:size-9 text-gray-700 p-2 rounded-lg bg-gray-100 shadow-md" />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 w-1/4 sm:w-1/5 justify-end">
        <LayoutIcon className="size-8 sm:size-9 text-gray-700 p-2 rounded-lg hover:bg-gray-100 hover:shadow-md" />
        <SettingIcon className="size-8 sm:size-9 text-gray-700 p-2 rounded-lg hover:bg-gray-100 hover:shadow-md" />
        <div className="hidden sm:flex items-center group relative h-9 w-10 gap-1 rounded-lg hover:bg-gray-100 hover:shadow-md p-1 transition-all">
          <UnfireIcon className="absolute left-1 size-6 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
          <FireIcon className="absolute left-1 size-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          <p className="absolute right-1 text-gray-700 text-sm font-medium">0</p>
        </div>
        <ProfileIcon className="size-6" />
      </div>
    </div>
  );
};

export default Navbar;