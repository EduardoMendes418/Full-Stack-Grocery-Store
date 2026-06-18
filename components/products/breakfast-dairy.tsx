import Link from "next/link";
import { ProductCard } from "./product-card";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Whole Milk",
    slug: "fresh-whole-milk",
    price: 3.50,
    unit: "1L",
    image: "/img/products/product-4.svg",
  },
  {
    id: 2,
    name: "Organic Free-Range Eggs",
    slug: "organic-free-range-eggs",
    price: 5.99,
    unit: "12 pcs",
    image: "/img/products/product-2.svg",
    tag: "Fresh",
  },
  {
    id: 3,
    name: "Greek Style Yogurt",
    slug: "greek-style-yogurt",
    price: 4.25,
    unit: "500g",
    image: "/img/products/product-6.svg",
  },
  {
    id: 4,
    name: "Salted Creamery Butter",
    slug: "salted-creamery-butter",
    price: 3.80,
    unit: "250g",
    image: "/img/products/product-1.svg",
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    slug: "whole-wheat-bread",
    price: 2.90,
    unit: "400g",
    image: "/img/products/product-5.svg",
  },
  {
    id: 6,
    name: "Toasted Oats Cereal",
    slug: "toasted-oats-cereal",
    price: 6.50,
    unit: "375g",
    image: "/img/products/product-3.svg",
    tag: "New",
  },
];

export const BreakfastDairy = () => {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Breakfast & Dairy</h2>
          <Link 
            href="/search?category=breakfast-dairy" 
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

