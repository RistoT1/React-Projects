import { useEffect, useState } from "react";

const useColorMode = () => {
    const [mode, setMode] = useState(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    });

    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    const toggleColorMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    }

    return { mode, toggleColorMode };
}

export default useColorMode;