import { User } from "../types/User";

const FilterBtns = ({
  users,
  handleFilterClick,
  filter,
}: {
  users: User[];
  handleFilterClick: (role: string) => void;
  filter: string;
}) => {
  const uniqueRoles = [...new Set(users.flatMap((u) => u.roles))];
  return (
    <div className="flex gap-2 flex-wrap">
      {uniqueRoles.map((r) => (
        <button
          className={`cursor-pointer px-4 py-2 rounded-md ${
            filter === r ? "bg-blue-500 text-white" : ""
          }`}
          type="button"
          key={r}
          onClick={() => handleFilterClick(r)}
        >
          {r}
        </button>
      ))}
    </div>
  );
};
export default FilterBtns;
