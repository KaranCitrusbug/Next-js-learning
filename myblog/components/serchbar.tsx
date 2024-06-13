"use client";

import { useState } from "react";
import { searchBlog } from "@/service/blogService";
import debounce from "lodash.debounce";

export default function SearchBar() {
  // const [searchValue, setSearchValue] = useState<string>("");
  // const [searchResults, setSearchResults] = useState<string[]>([]);

  // const handleSearch = debounce(
  //   async (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = e.target.value;
  //     const results = await searchBlog(value);
  //     setSearchResults(results);
  //     console.log(results);
    
  //   },
  //   1500
  // );
  return (
    <div className="">
      <input
        type="input"
        // onChange={handleSearch}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
    </div>
  );
}
