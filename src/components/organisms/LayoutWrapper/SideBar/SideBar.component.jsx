import React from 'react';

import SideBarItem from "./SideBarItem.component";
import { SideBarData } from "./SideBarData";

import './SideBar.styles.scss';

const spaceList = [
  {
    link: '/nope',
    // icon: <GlobalIcon className='icon' />,
    text: 'G-Day',
  },
  {
    link: '/users',
    text: 'Micros'
  },
  {
    link: '/nope',
    text: 'Data Residency',
  },
  // {
  //   link: '/jobs',
  //   text: 'Jobs',
  // }
];

const SideBar = () => (
  <div className='side-bar-container'>
    <div className='side-bar-tabs'>
      <SideBarItem isHome={true} link='/' text='Top Questions'/>

      <div className='public-tabs'>
        <p className='title fc-light'>PUBLIC</p>
        {SideBarData.map(({ link, icon, text}, index) => (
          <SideBarItem
            key={index}
            link={link}
            icon={icon}
            text={text}
          />
        ))}
      </div>
      <div className='teams-tabs'>
        <p className='title fc-light'>SPACE</p>
        {spaceList.map(({ link, icon, text}, index) => (
          <SideBarItem
            key={index}
            link={link}
            icon={icon}
            text={text}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SideBar;
