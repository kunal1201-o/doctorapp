import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'My Profile',
    path: '/Profile',
    icon: <IoIcons.IoMdPeople/>,
    cName: 'nav-text'
  },
  {
    title: 'My Subcription',
    path: '/Subcription',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'My Orders',
    path: '/orders',
    icon: < FaIcons.FaCartPlus  />,
    cName: 'nav-text'
  },
  {
    title: 'Wellness',
    path: '/Wellness',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/Setting',
    icon: <FaIcons.FaRegSun />,
    cName: 'nav-text'
  },
 
];