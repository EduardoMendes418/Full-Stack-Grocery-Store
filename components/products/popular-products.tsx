import Link from "next/link";
import { ProductCard } from "./product-card";
import { Product } from "@/types/product";

const products: Product[] = [
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

