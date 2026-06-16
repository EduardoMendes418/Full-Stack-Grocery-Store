import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "../ui/icons";

const products = [
  {
    id: 1,
    name: "Pure Natural Honey",
    slug: "pure-natural-honey",
    price: 15.50,
    unit: "500g",
    image: "/img/products/product-1.svg",
    tag: "Sale",
  },
  {
    id: 2,
    name: "Organic Extra Virgin Olive Oil",
    slug: "organic-olive-oil",
    price: 24.99,
    unit: "750ml",
    image: "/img/products/product-2.svg",
    tag: "New",
  },
  {
    id: 3,
    name: "Premium Ground Coffee",
    slug: "premium-ground-coffee",
    price: 12.80,
    unit: "250g",
    image: "/img/products/product-3.svg",
  },
  {
    id: 4,
    name: "Fresh Whole Milk",
    slug: "fresh-whole-milk",
    price: 3.50,
    unit: "1L",
    image: "/img/products/product-4.svg",
    tag: "10%",
  },
  {
    id: 5,
    name: "Organic Almonds",
    slug: "organic-almonds",
    price: 8.90,
    unit: "200g",
    image: "/img/products/product-5.svg",
  },
  {
    id: 6,
    name: "Natural Peanut Butter",
    slug: "natural-peanut-butter",
    price: 6.20,
    unit: "400g",
    image: "/img/products/product-6.svg",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-sm text-gray-500 mt-1">Our top picks for you this week</p>
          </div>
          <Link 
            href="/products" 
            className="text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
          >
            Explore More
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-gray-100 p-3 lg:p-4 hover:shadow-xl hover:border-brand/20 transition-all duration-300 flex flex-col h-full relative"
            >
              {product.tag && (
                <span className={`absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase ${
                  product.tag === 'Sale' ? 'bg-orange-500' : 
                  product.tag === 'New' ? 'bg-brand' : 'bg-blue-500'
                }`}>
                  {product.tag}
                </span>
              )}
              
              <Link href={`/products/${product.slug}`} className="relative aspect-square mb-4 overflow-hidden rounded-md block bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              
              <div className="flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-sm font-bold text-brand">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
                </div>
                
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-brand transition-colors mb-4">
                    {product.name}
                  </h3>
                </Link>
                
                <button className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-800 py-2 rounded-md text-sm font-bold transition-all hover:bg-brand hover:text-white group/btn">
                  <PlusIcon className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
