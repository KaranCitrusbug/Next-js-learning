"use client";

import React from "react";

interface SearchProps {
  value: string;
  onSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({ value, onSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
  
      <input
        type="input"
        placeholder="search"
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
  
  );
};

export default SearchBar;
