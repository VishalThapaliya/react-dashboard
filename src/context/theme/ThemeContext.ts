import { createContext } from "react";

// Theme type
export type Theme = "light" | "dark";

// Context type
export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

// Create context
export const ThemeContext = createContext<ThemeContextType | null>(null);