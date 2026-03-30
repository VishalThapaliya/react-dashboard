import { useEffect, useState, type ReactNode } from "react"
import { type Theme, ThemeContext } from "./ThemeContext";

// Provider props
type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}