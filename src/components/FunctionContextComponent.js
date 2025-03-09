import React, { useContext } from "react"
import { useThemeUpdate, useTheme } from "../store/ThemeContext";
const FunctionContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    )
}

export default FunctionContextComponent