import Link from "next/link";
import { ProductCard } from "./product-card";
import { Product } from "@/types/product";

const products: Product[] = [
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

