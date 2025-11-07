import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return false;
    
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (error) {
      console.warn("Error accessing localStorage or matchMedia:", error);
      return false;
    }
  });

  useEffect(() => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') return;

    try {
      const root = document.documentElement;
      
      if (isDark) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
        // Also set a data attribute for additional CSS targeting if needed
        root.setAttribute("data-theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
        root.setAttribute("data-theme", "light");
      }

      // Debug logging - remove in production
      console.log("Theme changed to:", isDark ? "dark" : "light");
      console.log("HTML classes:", root.className);
    } catch (error) {
      console.error("Error applying theme:", error);
    }
  }, [isDark]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      console.log("Toggling theme to:", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
};