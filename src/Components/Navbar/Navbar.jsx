import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Assets/Img/jobify.png';
import BellIcon from '../../Assets/svg/BellIcon';
import CaretDown from '../../Assets/svg/CaretDown';
import MessageIcon from '../../Assets/svg/MessageIcon';
import { AuthContext } from '../../Context/AuthContext';
import { useClickOutside } from '../../Utils/Hooks';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

const links = [
  {
    name: 'Dashboard',
    link: '/dashboard',
  },
  {
    name: 'Find Jobs',
    link: '/jobs'
  }, {
    name: 'Career Advice',
    link: '/advices'
  }
]

const dropdownlist = [
  {
    title: 'profile',
    link: '/app/profile',
  },
  {
    title: 'settings',
    link: '/app/settings',
  }
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { logOut } = useContext(AuthContext);

  const { userData } = useContext(AuthContext);
  const nodeRef = useRef(null);

  useClickOutside(nodeRef, () => { setOpen(false) });

  return (
    <header className="pt-2 px-2 md:px-4 lg:px-8 flex justify-between items-end fixed top-0 left-0 h-fit w-full bg-secondary z-absolute" ref={nodeRef}>
      <img src={Logo} className="h-10 md:h-12" alt="" />

      <button className="block md:hidden z-absolute" onClick={() => setOpen(prevOpen => !prevOpen)}>toggle</button>

      <nav className={`fixed md:static top-0 ${open ? 'right-0' : 'right-[-50%] opacity-0 md:opacity-100'} h-screen w-1/2 md:h-fit md:w-fit flex flex-col md:flex-row justify-evenly md:justify-center items-center  md:gap-16 bg-secondary md:bg-transparent border-primary border-l-4 md:border-l-0 z-[2000] transition-all duration-500`}>
        <ul className="h-fit flex flex-col md:flex-row items-center gap-16 md:gap-4 lg:gap-8 text-lg">
          {
            links
              .map((item, index) =>
                <li className="font-primarySemiBold" key={'navlink' + index}>
                  <NavLink to={'/app' + item.link} className={({ isActive }) => isActive ? 'font-primaryExtraBold text-primary border-b-[3px] border-primary block h-8' : 'block h-8'}>
                    {item.name}
                  </NavLink>
                </li>
              )
          }
          <li className="block h-8">
            <div className="bg-primary/10 py-1.5 px-2 rounded-md">
              <Link to='/app/random'>
                <MessageIcon className="text-primary h-5 w-8" />
              </Link>
            </div>
          </li>
          <li className="block h-8">
            <div className="bg-primary/10 py-1.5 px-2 rounded-md">
              <Link to='/app/random'>
                <BellIcon className="text-primary h-5 w-8" />
              </Link>
            </div>
          </li>

          <li>
            <Dropdown
              button={
                <div className="flex gap-2 items-center uppercase">
                  {userData.name.split(' ').map(name => name.slice(0, 1))}
                  <CaretDown className="h-4 w-4" />
                </div>
              }
            >
              <div className="py-0.5 w-full space-y-0.5" role="none">
                {dropdownlist.map((item, index) =>
                  <button
                    key={index}
                    className="text-gray-700 hover:bg-secondary disabled:bg-gray-300 disabled:text-white block px-4 py-2 text-sm w-full capitalize"
                  >
                    <Link to={item.link} className="w-full">
                      {item.title}
                    </Link>
                  </button>
                )}
                <button
                  className="text-gray-700 hover:bg-secondary disabled:bg-gray-300 disabled:text-white block px-4 py-2 text-sm w-full capitalize"
                  onClick={logOut}
                >
                  logout
                </button>
              </div>
            </Dropdown>
          </li>
        </ul>
      </nav>

    </header>
  )
}
