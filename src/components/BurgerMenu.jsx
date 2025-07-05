const BurgerMenu = ({ Menu, setMenu }) => {
  return (
    <ul
      className="w-8 h-6 relative flex lg:hidden justify-end cursor-pointer"
      onClick={() => setMenu(!Menu)}
    >
      <li
        className={`absolute w-full h-1 bg-sky-700 rounded-full duration-300 ${
          Menu ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-0'
        }`}
      ></li>
      <li
        className={`absolute h-1 bg-sky-700 rounded-full top-1/2 -translate-y-1/2 duration-300 ${
          Menu ? ' w-0 ' : 'w-full'
        }`}
      ></li>
      <li
        className={`absolute w-full h-1 bg-sky-700 rounded-full  duration-300 ${
          Menu ? 'bottom-1/2 translate-y-1/2 rotate-45' : 'bottom-0'
        }`}
      ></li>
    </ul>
  );
};
export default BurgerMenu;
