import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeupdateContext = createContext();

// custom hook to use context value
export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
    return useContext(ThemeupdateContext);
}

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState();

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeupdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeupdateContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}