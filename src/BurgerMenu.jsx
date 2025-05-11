const BurgerMenu = ({menu, setMenu}) => {
    return (
        <ul
            className={
                menu
                    ? "flex lg:hidden h-4 w-6 relative cursor-pointer"
                    : "flex lg:hidden h-4 w-6 relative cursor-pointer"
            }
            onClick={() => setMenu(!menu)}
        >
            <li
                className={
                    menu
                        ? "w-6 h-0.5 absolute right-0 top-2 -rotate-45 -translate-y-1/2 duration-300 bg-purple-700"
                        : "w-6 h-0.5 absolute right-0 top-0 duration-300 bg-purple-700"
                }
            ></li>
            <li
                className={
                    menu
                        ? "w-0 h-0.5 absolute right-0 bottom-2 translate-y-1/2 duration-300 bg-purple-700"
                        : "w-6 h-0.5 absolute right-0 bottom-2 translate-y-1/2 duration-300 bg-purple-700"
                }
            ></li>
            <li
                className={
                    menu
                        ? "w-6 h-0.5 absolute right-0 bottom-2 rotate-45 translate-y-1/2 duration-300 bg-purple-700"
                        : "w-6 h-0.5 absolute right-0 bottom-0 duration-300 bg-purple-700"
                }
            ></li>
        </ul>
    );
};
export default BurgerMenu;
