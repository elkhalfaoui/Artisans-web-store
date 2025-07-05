const BurgerBar = ({menu, setMenu}) => {
  return (
    <ul
      onClick={() => setMenu(!menu)}
      className="lg:hidden relative flex justify-end w-7 h-5 cursor-pointer"
    >
      <li
        className={
          menu
            ? 'absolute w-full h-0.5 bg-sky-700 top-[50%] -translate-y-[50%] -rotate-45 duration-300'
            : 'absolute w-full h-0.5 bg-sky-700 top-0 duration-300'
        }
      ></li>
      <li
        className={
          menu
            ? 'absolute w-0 h-0.5 bg-sky-700 top-[50%] -translate-y-[50%] duration-300'
            : 'absolute w-full h-0.5 bg-sky-700 top-[50%] -translate-y-[50%] duration-300'
        }
      ></li>
      <li
        className={
          menu
            ? 'absolute w-full h-0.5 bg-sky-700 top-[50%] -translate-y-[50%] rotate-45 duration-300'
            : 'absolute w-full h-0.5 bg-sky-700 bottom-0 duration-300'
        }
      ></li>
    </ul>
  );
}
export default BurgerBar