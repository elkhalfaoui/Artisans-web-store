import { useState } from 'react';
import logo from './assets/logo.png';
import BurgerMenu from './components/BurgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const App = () => {
//   const [Change, setChange] = useState(0);
//   const [Rank, setRank] = useState(0);
//   const [Langs, setLangs] = useState([
//     { id: 1, lang: '1' },
//     { id: 2, lang: '2' },
//     { id: 3, lang: '3' },
//   ]);
  const [Menu, setMenu] = useState(false);
  return (
    <div>
      <header className="stiky top-0 left-0 w-full bg-red-500">
        <div className="container m-auto px-4 grid grid-cols-1 lg:grid-cols-3 bg-green-400">
          <div className="col-span-1 flex justify-between items-center bg-yellow-300 absolute lg:relative w-full lg:w-fit lg:h-fit left-0 top-0 px-4 py-2 lg:px-0 z-50">
            {/* <div className="flex items-center gap-x-2"> */}
            <img src={logo} alt="Gehmy Marine" className="w-14" />
            {/* <h1 className="text-2xl">GEHMYMARINE</h1> */}
            {/* </div> */}
            <BurgerMenu Menu={Menu} setMenu={setMenu} />
          </div>
          <nav
            className={`col-span-2 flex flex-col lg:flex-row justify-between py-6 lg:py-0 bg-white border-b-2 lg:border-0 border-sky-700 w-full h-fit lg:h-full absolute lg:relative left-0 lg:top-0 z-40 duration-4000 ${
              Menu ? 'gap-y-72 top-12' : 'gap-y-0 -top-72'
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center gap-4 text-center">
              <li className="hover:text-sky-700">Home</li>
              <li className="hover:text-sky-700">Services</li>
              <li className="hover:text-sky-700">Projects</li>
              <li className="hover:text-sky-700">Equipments</li>
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-4 text-center">
              {/* <button
                onClick={() => {
                  setRank(Rank - 1);
                  let one = Langs[0];
                  setTimeout(() => {
                    setRank(0);
                    setLangs([Langs[1], Langs[2], one]);
                  }, 300);
                }}
              >
                left
              </button>
              <button
                onClick={() => {
                  setRank(Rank + 1);
                  setInterval(() => {
                    if(Change < 64) {
                        setChange(Change + 8)
                        document.getElementById('langs').style.right = Change + 'px';
                    }
                  }, 50);
                  let three = Langs[2];
                  setTimeout(() => {
                    setRank(0);
                    setLangs([three, Langs[0], Langs[1]]);
                  }, 300);
                }}
              >
                right
              </button>
              <div className="bg-orange-500 relative w-16 h-8 overflow-hidden">
                <ul
                  id="langs"
                  className={`absolute top-0 left-1/2 h-full -translate-x-1/2 w-[300%] flex bg-green-400 ${
                    Rank > 0
                      ? 'right-16'
                      : Rank < 0
                      ? '-left-16'
                      : ''
                  }`}
                >
                  {Langs.map((lang) => (
                    <li key={lang.id} className="w-16 bg-red-300">
                      {lang.lang}
                    </li>
                  ))}
                </ul>
              </div> */}
              <button className="flex items-center gap-2 px-3 py-1 border-2 border-sky-700 rounded-full cursor-pointer bg-sky-700 hover:bg-white text-white hover:text-sky-700">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Contact</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div className="absolute">
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
      </div>
    </div>
  );
};
export default App;
