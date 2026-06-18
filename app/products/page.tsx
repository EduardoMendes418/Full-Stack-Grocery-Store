"use client";

import { useState } from "react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductSort } from "@/components/products/product-sort";
import { ProductGrid } from "@/components/products/product-grid";
import { FilterIcon, XIcon } from "@/components/ui/icons";
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
  {
    id: 7,
    name: "Fresh Fuji Apples",
    slug: "fresh-fuji-apples",
    price: 4.50,
    unit: "1kg",
    image: "/img/latest-products/Rectangle 9.svg",
  },
  {
    id: 8,
    name: "Organic Bananas",
    slug: "organic-bananas",
    price: 2.99,
    unit: "700g",
    image: "/img/latest-products/Rectangle 9 (1).svg",
  },
  {
    id: 9,
    name: "Red Seedless Grapes",
    slug: "red-seedless-grapes",
    price: 5.25,
    unit: "500g",
    image: "/img/latest-products/Rectangle 9 (2).svg",
  },
  {
    id: 10,
    name: "Golden Kiwi Fruit",
    slug: "golden-kiwi-fruit",
    price: 6.90,
    unit: "3 pieces",
    image: "/img/latest-products/Rectangle 9 (3).svg",
  },
  {
    id: 11,
    name: "Ripe Strawberries",
    slug: "ripe-strawberries",
    price: 3.80,
    unit: "250g",
    image: "/img/latest-products/Rectangle 9 (4).svg",
  },
  {
    id: 12,
    name: "Fresh Blueberries",
    slug: "fresh-blueberries",
    price: 4.20,
    unit: "125g",
    image: "/img/latest-products/Rectangle 9 (5).svg",
  },
];

export default function ProductListingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-10">
        <Breadcrumbs items={[{ label: "Products" }]} />
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-16">
          {/* Sidebar - Desktop */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <ProductFilters />
          </aside>

          {/* Mobile Filter Drawer */}
          <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
            <aside className={`absolute top-0 left-0 bottom-0 w-80 bg-white p-6 transition-transform duration-300 transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <XIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
                <ProductFilters />
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">All Products</h1>
                <p className="text-sm text-gray-500 mt-1">{products.length} products found</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-sm font-semibold hover:border-brand transition-colors"
                >
                  <FilterIcon className="w-4 h-4" />
                  Filters
                </button>
                <ProductSort />
              </div>
            </div>

            <ProductGrid products={products} />

            {/* Pagination Placeholder */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors">Previous</button>
                <button className="w-10 h-10 rounded-md bg-brand text-white text-sm font-bold shadow-sm shadow-brand/20">1</button>
                <button className="w-10 h-10 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">2</button>
                <button className="w-10 h-10 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">3</button>
                <span className="px-2 text-gray-400">...</span>
                <button className="w-10 h-10 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">10</button>
                <button className="px-4 py-2 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors">Next</button>
              </nav>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

