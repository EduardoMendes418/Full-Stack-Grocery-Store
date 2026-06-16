import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "../ui/icons";

const products = [
  {
    id: 1,
    name: "Fresh Fuji Apples",
    slug: "fresh-fuji-apples",
    price: 4.50,
    unit: "1kg",
    image: "/img/latest-products/Rectangle 9.svg",
  },
  {
    id: 2,
    name: "Organic Bananas",
    slug: "organic-bananas",
    price: 2.99,
    unit: "700g",
    image: "/img/latest-products/Rectangle 9 (1).svg",
  },
  {
    id: 3,
    name: "Red Seedless Grapes",
    slug: "red-seedless-grapes",
    price: 5.25,
    unit: "500g",
    image: "/img/latest-products/Rectangle 9 (2).svg",
  },
  {
    id: 4,
    name: "Golden Kiwi Fruit",
    slug: "golden-kiwi-fruit",
    price: 6.90,
    unit: "3 pieces",
    image: "/img/latest-products/Rectangle 9 (3).svg",
  },
  {
    id: 5,
    name: "Ripe Strawberries",
    slug: "ripe-strawberries",
    price: 3.80,
    unit: "250g",
    image: "/img/latest-products/Rectangle 9 (4).svg",
  },
  {
    id: 6,
    name: "Fresh Blueberries",
    slug: "fresh-blueberries",
    price: 4.20,
    unit: "125g",
    image: "/img/latest-products/Rectangle 9 (5).svg",
  },
];

export const PopularProducts = () => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Popular Products</h2>
          <Link 
            href="/products" 
            className="text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
          >
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-gray-100 p-3 lg:p-4 hover:shadow-xl hover:border-brand/20 transition-all duration-300 flex flex-col h-full"
            >
              <Link href={`/products/${product.slug}`} className="relative aspect-square mb-4 overflow-hidden rounded-md block">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
