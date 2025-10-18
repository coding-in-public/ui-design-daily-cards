const FilterButtons = ({
  uniqueFilters,
  selectedFilter,
  setFilter,
}: {
  uniqueFilters: string[];
  selectedFilter: string;
  setFilter: (a: string) => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      {uniqueFilters.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => setFilter(f)}
          className={`border px-3 py-0.5 text-xs rounded-full cursor-pointer ${
            selectedFilter === f ? "bg-slate-600 text-slate-50" : ""
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};
export default FilterButtons;
