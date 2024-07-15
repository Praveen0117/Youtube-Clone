import React from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);

  if (!isMenuOpen) return null;
  return   (
    <div className='w-46 bg-gray-400'>
      <ul className='font-bold m-5'>
        <li className='flex items-center'>
          <span className='p-3'><IoHomeSharp /></span>Home
        </li>
        <li className='flex items-center'>
          <span className='p-3'><SiYoutubeshorts /></span>Shorts
        </li>
        <li className='flex items-center'>
          <span className='p-3'><MdSubscriptions /></span>Subscriptions
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
