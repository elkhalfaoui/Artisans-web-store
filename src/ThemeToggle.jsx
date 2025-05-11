import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggle = ({ theme, setTheme }) => {
    return (
        <button
            className="relative w-10 h-7 rounded-4xl border-2 border-purple-700 cursor-pointer justify-start duration-300"
            onClick={() => setTheme(!theme)}
        >
            <div
                className={
                    theme
                        ? "absolute top-0 left-0 flex justify-center items-center w-6 h-6 rounded-4xl text-sm duration-300 bg-purple-700 text-white"
                        : "absolute top-0 left-3 flex justify-center items-center w-6 h-6 rounded-4xl text-sm duration-300 bg-purple-700 text-white"
                }
            >
                {theme ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </div>
        </button>
    );
};
export default ThemeToggle;
