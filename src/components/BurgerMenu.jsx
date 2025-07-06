const BurgerMenu = ({ menu, setMenu }) => {
  return (
    <ul
      className="w-8 h-6 relative flex md:hidden justify-end cursor-pointer"
      onClick={() => setMenu(!menu)}
    >
      <li
        className={`absolute w-full h-1 bg-sky-700 rounded-full duration-300 ${
          menu ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-0'
        }`}
      ></li>
      <li
        className={`absolute h-1 bg-sky-700 rounded-full top-1/2 -translate-y-1/2 duration-300 ${
          menu ? ' w-0 ' : 'w-full'
        }`}
      ></li>
      <li
        className={`absolute w-full h-1 bg-sky-700 rounded-full  duration-300 ${
          menu ? 'bottom-1/2 translate-y-1/2 rotate-45' : 'bottom-0'
        }`}
      ></li>
    </ul>
  );
};
export default BurgerMenu;
