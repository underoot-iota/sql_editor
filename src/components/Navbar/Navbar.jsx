import { BiMoon, BiSun } from "react-icons/bi";
import { useContext } from "react";

import ThemeContext from "../../context/ThemeContext";

const ThemeIcon = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkTheme(!darkTheme);
    };

    const darkToggleButtonStyle = ["text-2xl mr-3 mt-2 hover:text-indigo-500 cursor-pointer"]

    return (
        <span onClick={toggleDarkMode}>
            {darkTheme ? (
                <BiSun className={`text-white ${darkToggleButtonStyle}`} />
            ) : (
                <BiMoon className={`${darkToggleButtonStyle}`} />
            )}
        </span>
    );
};

function Navbar() {
    return (
        <>
            <header className="bg-white flex sm:justify-start sm:flex-nowrap w-full text-sm py-4 border-2 border-solid border-indigo-50 dark:border-gray-700 dark:bg-gray-800">
                <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                    <a
                        className="flex-none text-4xl font-semibold text-gray-900 dark:text-white"
                        href=""
                    >
                        <span className="text-indigo-500">SQL </span>Editor
                    </a>
                </nav>
                <ThemeIcon />
            </header>
        </>
    );
}

export default Navbar;
