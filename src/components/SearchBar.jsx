import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="🔍 Search for a book..."
        className="w-full max-w-lg px-4 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 
                   shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none 
                   dark:bg-gray-900 dark:text-white"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onSearch}
        className="px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-2xl 
                   shadow-lg flex items-center gap-2 transition"
      >
        <Search className="w-5 h-5" />
        Search
      </motion.button>
    </motion.div>
  );
}