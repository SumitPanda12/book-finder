import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searched, setSearched] = useState(false); 

  const searchBooks = async () => {
    if (!query.trim()) return;

    const res = await fetch(
      ' https://openlibrary.org/search.json?title={bookTitle}'
    );
    const data = await res.json();

    const filtered = (data.docs || []).filter((book) =>
      book.title?.toLowerCase().includes(query.toLowerCase())
    );

    setBooks(filtered);
    setSearched(true); 
    setQuery('')
  };

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-100 
                    dark:from-gray-900 dark:to-gray-800 
                    text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            📚 Book Finder
          </h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Search Bar */}
        <SearchBar query={query} setQuery={setQuery} onSearch={searchBooks} />

        {/* Results */}
        {searched ? (
          books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
              ❌ No books found. Try another title.
            </p>
          )
        ) : (
          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            🔍 Search a book title to get started
          </p>
        )}
      </div>
    </div>
  );
}