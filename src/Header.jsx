import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [theme, setTheme] = useState(true);
    const [menu, setMenu] = useState(false);
    const [categoriesList, setCategoriesList] = useState(false);
    return (
        <header
            className={
                menu
                    ? "absolute top-0 left-0 w-full z-50 bg-zinc-100 border-b-2 lg:border-b-0 border-purple-700"
                    : "absolute top-0 left-0 w-full z-50 bg-zinc-100"
            }
        >
            <div className="container m-auto flex flex-col lg:flex-row justify-between px-2 py-6 text-sm ">
                <div className="flex justify-between items-center">
                    <h2 className="flex items-center gap-2 text-2xl">
                        <FontAwesomeIcon
                            icon={faTree}
                            className="text-purple-700"
                        />
                        <span className="text-orange-500">Artisan</span>
                    </h2>
                    <BurgerMenu menu={menu} setMenu={setMenu} />
                </div>
                <ul
                    className={
                        menu
                            ? "flex flex-col lg:flex-row mt-6 lg:mt-0 gap-4 items-center"
                            : "hidden lg:flex gap-4 items-center"
                    }
                >
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex gap-2 items-center py-1 px-2 border-2 text-purple-700 border-purple-700 rounded-4xl hover:bg-purple-600 hover:text-white"
                        >
                            <FontAwesomeIcon icon={faStar} />
                            <span>BEST SELLERS</span>
                        </a>
                    </li>
                    <li>ALL PRODUCTS</li>
                    <li className="relative cursor-pointer">
                        <p
                            className="flex gap-2 hover:text-purple-700"
                            onClick={() => setCategoriesList(!categoriesList)}
                        >
                            CATEGORIES
                            <span
                                className={
                                    categoriesList
                                        ? "w-2 h-2 mt-1.5 border-t-2 border-l-2 rotate-45 duration-300"
                                        : "w-2 h-2 mt-1 border-t-2 border-l-2 rotate-225 duration-300"
                                }
                            ></span>
                        </p>
                        <ul
                            className={
                                categoriesList
                                    ? "lg:absolute lg:top-10 flex flex-col items-center lg:items-start gap-2 lg:border-2 lg:border-purple-700 lg:rounded-2xl lg:py-4 lg:px-8"
                                    : "hidden"
                            }
                        >
                            <span className="lg:absolute lg:w-3 lg:h-3 lg:border-t-2 lg:border-l-2 border-purple-700 rotate-45 -top-2 left-4.5 skew-12 bg-white"></span>
                            <li className="hover:text-purple-700">Tables</li>
                            <li className="hover:text-purple-700">Chaires</li>
                            <li className="hover:text-purple-700">Doors</li>
                            <li className="hover:text-purple-700">Desks</li>
                            <li className="hover:text-purple-700">Beds</li>
                        </ul>
                    </li>
                    <li>ABOUT</li>
                    <li>CONTACTS</li>
                    <li>
                        <ThemeToggle theme={theme} setTheme={setTheme} />
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
