import { useState } from "react";

export const useTheme = () => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    const isDarkTheme = () => {
        if (theme === 'dark') {
            return true;
        } return false;
    };

    return {
        theme,
        toggleTheme,
        isDarkTheme,
    }
};