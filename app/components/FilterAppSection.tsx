"use client";

import { useEffect, useState } from "react";
import type { User } from "../types/User";
import FilterButtons from "./FilterButtons";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";

const FilterAppSection = ({ users }: { users: User[] }) => {
  const uniqueFilters = Array.from(new Set(users.flatMap((u) => u.roles)));

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [searchText, setSearchText] = useState("");

  const setFilter = (filterName: string) => {
    if (filterName === selectedFilter) {
      return setSelectedFilter("");
    }

    setSelectedFilter(filterName);

    // update the url param of filter?
  };

  useEffect(() => {
    const updateFilter = () => {
      const searchUsersResults =
        searchText === ""
          ? users
          : users.filter((u) =>
              u.name.toLowerCase().includes(searchText.toLowerCase())
            );

      if (selectedFilter !== "" && users) {
        const newFilteredUsers = searchUsersResults.filter((u) =>
          u.roles.includes(selectedFilter)
        );
        setFilteredUsers(newFilteredUsers);
      } else {
        setFilteredUsers(searchUsersResults);
      }
    };
    updateFilter();
  }, [selectedFilter, searchText, users]);

  return (
    <div className="grid gap-8">
      <div className="flex items-center justify-between">
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <FilterButtons
          uniqueFilters={uniqueFilters}
          selectedFilter={selectedFilter}
          setFilter={setFilter}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {filteredUsers.map((u) => (
          <UserCard key={u.name} user={u} />
        ))}
      </div>
    </div>
  );
};
export default FilterAppSection;
