import { SearchIcon } from "./icons";

export const SearchBar = () => {
  return (
    <div className="relative flex w-full max-w-2xl items-center">
      <div className="absolute left-4 text-gray-500">
        <SearchIcon className="h-5 w-5" />
      </div>
      <input
        type="text"
        placeholder="What are you looking for..."
        className="w-full rounded-md border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition-colors focus:border-brand focus:bg-white"
      />
      <button className="absolute right-2 rounded bg-brand px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover">
        Search
      </button>
    </div>
  );
};
