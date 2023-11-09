import { createContext } from "react";

const ThemeContext = createContext({
    darkTheme: null,
    setDarkTheme: () => {},
});

export default ThemeContext;
