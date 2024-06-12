"use client"
import { usePathname } from "next/navigation";

export default function SearchBar() {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className="">
      <input
        type="search"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
    </div>
  );
}