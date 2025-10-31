"use client";

import { useEffect, useState } from "react";
import type { User } from "../types/User";
import FilterBtns from "./FilterBtns";
import SearchInput from "./SearchInput";
import UserCard from "./UserCard";

const FilterApp = ({ users }: { users: User[] }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilterClick = (role: string) => {
    filter === role ? setFilter("") : setFilter(role);
  };

  useEffect(() => {
    // if none are set
    if (filter === "" && searchTerm === "") {
      return setFilteredUsers(users);
    }

    // if only search term
    if (filter === "") {
      console.log("in here");
      const newFilteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return setFilteredUsers(newFilteredUsers);
    }

    // if only filter
    if (searchTerm === "") {
      const newFilteredUsers = users.filter((u) => u.roles.includes(filter));
      return setFilteredUsers(newFilteredUsers);
    }

    // if both are set
    const searchedUsers = users.filter((u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const newFilteredUsers = searchedUsers.filter((u) =>
      u.roles.includes(filter)
    );
    setFilteredUsers(newFilteredUsers);
  }, [filter, searchTerm, users]);

  return (
    <>
      <div className="flex justify-between items-center gap-6 w-full">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBtns
          filter={filter}
          users={users}
          handleFilterClick={handleFilterClick}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filteredUsers.map((u) => (
          <UserCard key={u.name} user={u} />
        ))}
      </div>
    </>
  );
};
export default FilterApp;
