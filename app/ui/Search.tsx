"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { CiUser } from "react-icons/ci";

import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchText: string) => {
    console.log(`Searching...${searchText}`);

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (searchText) {
      params.set("query", searchText);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="bg-white w-full flex items-center gap-2 mt-3 rounded-2xl px-2 py-2">
      <CiUser size={18} color="gray" />
      <input
        type="text"
        placeholder="Search user"
        className="bg-transparent text-gray-4 outline-none text-sm"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
