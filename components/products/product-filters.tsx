import { Category } from "@/types/product";

const categories: Category[] = [
  { id: 1, name: "Fruits & Vegetables", slug: "fruits-vegetables", image: "" },
  { id: 2, name: "Meat & Fish", slug: "meat-fish", image: "" },
  { id: 3, name: "Dairy & Eggs", slug: "dairy-eggs", image: "" },
  { id: 4, name: "Bakery", slug: "bakery", image: "" },
  { id: 5, name: "Beverages", slug: "beverages", image: "" },
  { id: 6, name: "Snacks & Desserts", slug: "snacks-desserts", image: "" },
];

export const ProductFilters = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button className="text-xs font-semibold text-brand hover:text-brand-hover transition-colors">
          Clear All
        </button>
      </div>
      
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id}>
              <label className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand cursor-pointer" 
                />
                <span className="ml-3 text-sm text-gray-600 group-hover:text-brand transition-colors">
                  {category.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Price Range</h3>
        <ul className="space-y-3">
          {['Under $10', '$10 to $50', '$50 to $100', 'Over $100'].map((range) => (
            <li key={range}>
              <label className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand cursor-pointer" 
                />
                <span className="ml-3 text-sm text-gray-600 group-hover:text-brand transition-colors">
                  {range}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Dietary Needs</h3>
        <ul className="space-y-3">
          {['Organic', 'Gluten Free', 'Vegan', 'Sugar Free'].map((diet) => (
            <li key={diet}>
              <label className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-brand focus:ring-brand cursor-pointer" 
                />
                <span className="ml-3 text-sm text-gray-600 group-hover:text-brand transition-colors">
                  {diet}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
