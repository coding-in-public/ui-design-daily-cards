import { Dispatch, SetStateAction } from "react";

const SearchInput = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Search Users
      </label>
      <svg
        width="24"
        height="24"
        className="absolute top-1/2 left-2 -translate-y-1/2"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
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
      {/** biome-ignore lint/correctness/useUniqueElementIds: cause I can */}
      <input
        type="search"
        name="
    search-input"
        id="search-input"
        className="border rounded-sm py-2 pl-9 pr-4"
        placeholder="Search users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
