"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";

// Example movie list
const allMovies = [
  { id: "1", title: "Dune: Part Two", poster: "/dune.jpg" },
  { id: "2", title: "Godzilla x Kong", poster: "/gk.jpg" },
  { id: "3", title: "Avatar: The Way of Water", poster: "/avatar.jpg" },
  { id: "4", title: "Black Adam", poster: "/blackadam.jpg" },
  { id: "5", title: "Black Panther: Wakanda Forever", poster: "/bp.jpg" },
  { id: "6", title: "Percy Jackson: Sea of Monsters", poster: "/pjsom.jpg" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState("Select Theater");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(allMovies);

  const theaters = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Tangerang"];

  // Handle search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter movies based on the query
    if (query) {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(allMovies);
    }
  };

  return (
    <header className="bg-gray-800 text-white w-full shadow-lg z-50">
      <div className="sticky top-0 container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="CineMax Logo" width={200} height={200} />
        </Link>

        {/* Search and Auth Buttons */}
        <nav className="flex items-center space-x-6 relative">
          {/* Search */}
          <div className="relative w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search movies..."
              className="px-4 py-2 rounded bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full pl-10"
            />
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            {/* Search results */}
            {searchQuery && filteredMovies.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white text-black shadow-md rounded-lg max-h-60 overflow-y-auto z-50">
                {filteredMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    href={`/movie/${movie.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {movie.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theater Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-all"
            >
              {selectedTheater} <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md w-40 z-50">
                {theaters.map((theater) => (
                  <li
                    key={theater}
                    onClick={() => {
                      setSelectedTheater(theater);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {theater}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Login Button */}
          <Link
            href="/register"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white transition-all"
          >
            Login / Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
