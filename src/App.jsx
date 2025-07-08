import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import sun from './assets/sun.svg';
import BurgerMenu from './components/BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import InfiniteCartSlider from './InfiniteCartSlider';

const App = () => {
  const [menu, setMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        if (!menu) {
          // if the Menu is open don't lift the header up
          setShowHeader(false);
        }
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header
        className={`sticky top-0 left-0 h-14 transition-transform duration-300 z-50 bg-zinc-100 border-b-2 border-zinc-200 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="md:container mx-auto md:px-4 md:py-2 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 items-center">
          <div className="col-span-1 flex justify-between items-center px-4 py-2 md:p-0 bg-zinc-100">
            <img src={logo} alt="Gehmy Marine" />
            <div className="flex items-center gap-4">
              <button className="md:hidden py-1 px-2 cursor-pointer rounded-full border-2 border-sky-700 bg-sky-700 hover:bg-zinc-100 text-zinc-100 hover:text-sky-700">
                <FontAwesomeIcon icon={faSun} />
              </button>
              <button className="md:hidden py-1 px-2 cursor-pointer rounded-full border-2 border-sky-700 bg-sky-700 hover:bg-zinc-100 text-zinc-100 hover:text-sky-700">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>

              <BurgerMenu menu={menu} setMenu={setMenu} />
            </div>
          </div>
          <nav
            className={`md:col-span-4 lg:col-span-2 flex justify-between items-center flex-col md:flex-row h-[calc(100dvh-56px)] py-16 md:py-0 absolute left-0 w-full md:h-fit md:translate-0 md:top-0 md:relative duration-500 -z-10 md:z-0 bg-zinc-100 ${
              menu ? 'top-14' : '-top-[100dvh]'
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6">
              <li className="cursor-pointer text-zinc-800 hover:text-sky-700">
                Home
              </li>
              <li className="cursor-pointer text-zinc-800 hover:text-sky-700 ">
                Services
              </li>
              <li className="cursor-pointer text-zinc-800 hover:text-sky-700 ">
                Projects
              </li>
              <li className="cursor-pointer text-zinc-800 hover:text-sky-700 ">
                Equipments
              </li>
            </ul>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="">Lang</div>
              <button className="hidden md:flex py-2 px-2 cursor-pointer rounded-full border-2 border-sky-700 bg-sky-700 hover:bg-zinc-100 text-zinc-100 hover:text-sky-700">
                <FontAwesomeIcon icon={faSun} />
              </button>
              <button className="flex items-center justify-center gap-2 w-72 md:w-fit py-2 md:py-1 px-4 md:px-3 cursor-pointer rounded-full border-2 border-sky-700 bg-sky-700 hover:bg-zinc-100 text-zinc-100 hover:text-sky-700">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Contact</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <InfiniteCartSlider />
    </div>
  );
};
export default App;
