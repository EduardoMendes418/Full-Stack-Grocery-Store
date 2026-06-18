import { ChevronDownIcon } from "../ui/icons";

export const ProductSort = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
      <div className="relative inline-block w-48">
        <select className="appearance-none w-full bg-white border border-gray-200 text-sm py-2 pl-3 pr-10 rounded-md focus:outline-none focus:border-brand cursor-pointer">
          <option>Newest Arrivals</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Popularity</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
