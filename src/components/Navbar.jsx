import { BiMoon, BiSun } from 'react-icons/bi';
import useDarkMode from '../utils/useDarkMode';

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <BiSun size='24' className='top-navigation-icon' />
        ) : (
          <BiMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

function Navbar() {
    return (
        <>
            <header className="bg-white flex sm:justify-start sm:flex-nowrap w-full text-sm py-4 border-2 border-solid border-indigo-50 dark:bg-gray-800">
                <nav
                    className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                >
                    <a
                        className="flex-none text-4xl font-semibold dark:text-white"
                        href="#"
                    >
                        <span className="text-indigo-400">SQL </span>Editor
                    </a>
                </nav>
                <ThemeIcon />
            </header>
        </>
    );
}

export default Navbar;
