import { useTheme } from "@hooks/useTheme";

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
            <button 
                onClick={toggleTheme}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
            >{theme === "light" ? "🌙" : "☀️"}</button>
        </>
    )
}

export default ThemeToggle;