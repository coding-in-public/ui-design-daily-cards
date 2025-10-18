"use client";

import type { Dispatch, FormEvent, SetStateAction } from "react";

const SearchInput = ({
  searchText,
  setSearchText,
}: {
  setSearchText: Dispatch<SetStateAction<string>>;
  searchText: string;
}) => {
  return (
    <div className="relative">
      <label htmlFor="searchInput" className="sr-only">
        search users
      </label>
      <svg
        width="24"
        height="24"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m21 21l-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </g>
      </svg>
      {/** biome-ignore lint/correctness/useUniqueElementIds: bc I want to */}
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        value={searchText}
        onInput={(e: FormEvent<HTMLInputElement>) =>
          setSearchText(e.currentTarget.value)
        }
        className="py-2 border border-slate-300 pr-4 pl-8"
      />
    </div>
  );
};
export default SearchInput;
