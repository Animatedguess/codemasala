import React from 'react'
import ProfileIcon from '../../assets/icons/ProfileIcon'
import ListIcon from '../../assets/icons/ListIcon'
import AppearIcon from '../../assets/icons/AppearIcon'
import SettingIcon from '../../assets/icons/SettingIcon'
import SignOutIcon from '../../assets/icons/SignOutIcon'
import SubmitIcon from '../../assets/icons/SubmitIcon'


const UserProfile = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className="bg-blue-950  flex  flex-col w-fit border-2 rounded-2xl p-6 ">
      <div className="flex item-center">
        <ProfileIcon className="size-28 text-white fill-white stroke-white p-2" />
        <p className="p-10 text-2xl text-white font-bold">USER NAME</p>
      </div>
      <div className=" flex flex-col item-center text-2xl text-white space-y-7 mx-5 py-6 ">
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-2 border-2 border-blue-900 rounded-lg">
          <ListIcon className="size-8 text-white fill-white stroke-white" />
          <a>My List</a>
        </div>
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-2 border-2 border-blue-900 rounded-lg">
          <SubmitIcon className="size-8 text-white fill-white stroke-white" />
          <a>Submissions</a>
        </div>
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-2 border-2 border-blue-900 rounded-lg">
          <AppearIcon className="size-8 text-white fill-white stroke-white" />
          <a>Appearance</a>
        </div>
        <div className="flex items-center space-x-3  hover:bg-blue-700 p-2 border-2 border-blue-900 rounded-lg">
          <SettingIcon className="size-8 text-white fill-white stroke-white" />
          <a>Settings</a>
        </div>
        <div className="flex items-center space-x-3 hover:bg-blue-700 p-2 border-2 border-blue-900 rounded-lg">
          <SignOutIcon className="size-8 text-white fill-white stroke-white" />
          <a>Sign Out</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile
