"use client";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const handleSearch = useDebouncedCallback((searchText: string) => {
    console.log(`Searching...${searchText}`);
  }, 300);
  return (
    <div className="bg-gray-1 w-full flex items-center gap-2 mt-3 rounded-2xl px-2 py-2">
      <IoIosSearch size={18} color="gray" />
      <input
        type="text"
        placeholder="Search chats"
        className="bg-transparent text-gray-4 outline-none text-sm"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
