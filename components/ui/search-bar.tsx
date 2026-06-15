import { SearchIcon, ChevronDownIcon } from "./icons";

export const SearchBar = () => {
  return (
    <div className="relative flex w-full max-w-3xl items-center bg-gray-100 rounded-md border border-gray-200 focus-within:border-brand focus-within:bg-white transition-all">
      {/* Category Dropdown */}
      <div className="hidden lg:flex items-center gap-2 px-4 py-3 border-r border-gray-200 cursor-pointer min-w-[150px]">
        <span className="text-sm text-gray-600 whitespace-nowrap">All Categories</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
      </div>

      <div className="flex-1 relative flex items-center">
        <div className="absolute left-4 text-gray-500">
          <SearchIcon className="h-5 w-5" />
        </div>
        <input
          type="text"
          placeholder="What are you looking for..."
          className="w-full bg-transparent py-3 pl-12 pr-4 text-sm outline-none"
        />
      </div>
      
      <button className="mr-1.5 rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
        Search
      </button>
    </div>
  );
};
