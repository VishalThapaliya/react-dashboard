import { useEffect, useState, type ReactNode } from "react";
import { type Theme, ThemeContext } from "./ThemeContext";

// Provider props
type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem("theme") as Theme) || "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        if(theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}