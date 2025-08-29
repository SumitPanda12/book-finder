import React from "react";
import { motion } from "framer-motion";

export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? 'https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg'
    : null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
    >
      {/* Book Cover */}
      {coverUrl ? (
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
          No Cover
        </div>
      )}

      {/* Book Info */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white truncate">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          📅 {book.first_publish_year || "N/A"}
        </p>
      </div>
    </motion.div>
  );
}