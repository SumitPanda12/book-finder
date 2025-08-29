import React from "react";

export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 
                 text-gray-900 dark:text-gray-100 font-semibold shadow-md 
                 hover:scale-105 transition"
    >
      {darkMode ? "🌙 Dark" : "☀ Light"}
    </button>
  );
}