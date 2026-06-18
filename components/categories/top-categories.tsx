import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: "/img/categories/fruits-vegetables.svg",
  },
  {
    id: 2,
    name: "Meat & Fish",
    slug: "meat-fish",
    image: "/img/categories/meat-fish.svg",
  },
  {
    id: 3,
    name: "Dairy & Eggs",
    slug: "dairy-eggs",
    image: "/img/categories/dairy-eggs.svg",
  },
  {
    id: 4,
    name: "Bakery",
    slug: "bakery",
    image: "/img/categories/bakery.svg",
  },
  {
    id: 5,
    name: "Beverages",
    slug: "beverages",
    image: "/img/categories/beverages.svg",
  },
  {
    id: 6,
    name: "Snacks & Desserts",
    slug: "snacks-desserts",
    image: "/img/categories/snacks-desserts.svg",
  },
  {
    id: 7,
    name: "Baby Care",
    slug: "baby-care",
    image: "/img/categories/baby-care.svg",
  },
  {
    id: 8,
    name: "Personal Care",
    slug: "personal-care",
    image: "/img/categories/personal-care.svg",
  },
  {
    id: 9,
    name: "Cleaning",
    slug: "cleaning",
    image: "/img/categories/cleaning.svg",
  },
  {
    id: 10,
    name: "Household",
    slug: "household",
    image: "/img/categories/household.svg",
  },
];

export const TopCategories = () => {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Top Categories</h2>
          <Link 
            href="/categories" 
            className="text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
          >
            View All Categories
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group flex flex-col items-center transition-all"
            >
              <div className="relative w-24 h-24 lg:w-28 lg:h-28 mb-4 rounded-full bg-white flex items-center justify-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] group-hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="relative w-12 h-12 lg:w-16 lg:h-16 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xs lg:text-sm font-semibold text-gray-800 text-center group-hover:text-brand transition-colors px-2">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
