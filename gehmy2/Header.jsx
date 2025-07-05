import { useState } from 'react';
import BurgerBar from './BurgerBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faRepeat } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [lang, setLang] = useState(false);

  return (
    <header className="absolute left-0 top-0 w-full bg-white h-fit">
      <div className="container m-auto flex flex-col lg:flex-row justify-between items-center text-center py-2">
        <div className="flex justify-between items-center w-full px-4">
          <img src={logo} alt="Gehmy Marine" />
          <BurgerBar menu={menu} setMenu={setMenu} />
        </div>
        <ul
          className={
            menu
              ? 'flex flex-col lg:flex-row gap-4'
              : 'hidden lg:flex flex-col lg:flex-row gap-4'
          }
        >
          <li className="py-1 px-3 border-2  rounded-full border-sky-600 cursor-pointer">
            <a href="#">Home</a>
          </li>
          {/* <li className="py-1 px-3 border-2 border-transparent rounded-full hover:border-sky-600 cursor-pointer">
                  <a href="#">About</a>
                </li> */}
          <li className="py-1 px-3 border-2 border-transparent rounded-full hover:border-sky-600 cursor-pointer">
            <a href="#">Services</a>
          </li>
          <li className="py-1 px-3 border-2 border-transparent rounded-full hover:border-sky-600 cursor-pointer">
            <a href="#">Projects</a>
          </li>
          <li className="py-1 px-3 border-2 border-transparent rounded-full hover:border-sky-600 cursor-pointer">
            <a href="#">Equipments</a>
          </li>
        </ul>
        <ul
          className={
            menu
              ? 'flex flex-col lg:flex-row mt-4 lg:mt-0 gap-4'
              : 'hidden lg:flex flex-col lg:flex-row mt-4 lg:mt-0 gap-4'
          }
        >
          <li className="">
            <button className="py-2 px-4 rounded-full cursor-pointer bg-sky-600 hover:bg-sky-700 text-white">
              Contact
            </button>
          </li>

          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setLang(!lang)}
          >
            <FontAwesomeIcon icon={faGlobe} />
            <span className="w-4">{lang ? 'FR' : 'EN'}</span>
            <FontAwesomeIcon icon={faRepeat} />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
