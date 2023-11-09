import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body";

import useDarkMode from "../utils/useDarkMode";
import ThemeContext from "../context/ThemeContext";

function SqlEditor() {
    const [darkTheme, setDarkTheme] = useDarkMode();

    return (
        <ThemeContext.Provider
            value={{
                darkTheme,
                setDarkTheme,
            }}
        >
            <div className="flex flex-col h-screen">
                <Navbar />
                <Body />
            </div>
        </ThemeContext.Provider>
    );
}

export default SqlEditor;
