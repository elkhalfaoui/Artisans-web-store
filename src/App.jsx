import { useState } from 'react';
import logo from './logo.png';
import hero from './hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header className="absolute left-0 top-0 w-full min-h-16 bg-white z-50">
        <div className="container m-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-fit flex items-center justify-between">
            <img src={logo} alt="logo" className="" />
            <ul
              onClick={() => setMenu(!menu)}
              className="lg:hidden relative flex justify-end w-8 h-6 cursor-pointer"
            >
              <li
                className={
                  menu
                    ? 'absolute w-full h-0.5 bg-blue-600 top-[50%] -translate-y-[50%] -rotate-45 duration-300'
                    : 'absolute w-full h-0.5 bg-blue-600 top-0 duration-300'
                }
              ></li>
              <li
                className={
                  menu
                    ? 'absolute w-0 h-0.5 bg-blue-600 top-[50%] -translate-y-[50%] duration-300'
                    : 'absolute w-full h-0.5 bg-blue-600 top-[50%] -translate-y-[50%] duration-300'
                }
              ></li>
              <li
                className={
                  menu
                    ? 'absolute w-full h-0.5 bg-blue-600 top-[50%] -translate-y-[50%] rotate-45 duration-300'
                    : 'absolute w-full h-0.5 bg-blue-600 bottom-0 duration-300'
                }
              ></li>
            </ul>
          </div>

          <ul
            className={
              menu
                ? 'flex flex-col lg:flex-row pt-5 lg:pt-0 gap-5'
                : 'hidden lg:flex flex-col lg:flex-row pt-5 lg:pt-0 gap-5'
            }
          >
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                Home
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                Our Projects
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                Our Services
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                Equipments
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                About us
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className="relative flex items-center cursor-pointer h-full hover:bg-neutral-100 group">
              <a href="#" className="py-2 px-1">
                Contact
              </a>
              <span className="block absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-cyan-500 duration-300"></span>
            </li>
            <li className=""></li>
          </ul>
        </div>
      </header>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-dvh bg-cover"
      >
        <div className="container m-auto relative h-full flex flex-col items-center justify-center gap-4">
          <h1 className="top-[50%] left-[50%] text-white text-3xl lg:text-6xl font-medium">
            GEHMY MARINE
          </h1>
          <h2 className="top-[50%] left-[50%] text-white text-sm lg:text-2xl">
            ENGINEERING AND CONSTRUCTION
          </h2>

          <FontAwesomeIcon
            className="absolute top-[50%]  text-white text-3xl left-8 cursor-pointer"
            icon={faAngleLeft}
          />
          <FontAwesomeIcon
            className="absolute top-[50%] text-white text-3xl right-8 cursor-pointer"
            icon={faAngleRight}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
