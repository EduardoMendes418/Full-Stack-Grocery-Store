"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HomeIcon, GridIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "../ui/icons";
import { useCartStore } from "@/hooks/use-cart-store";

export const MobileNavigation = () => {
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const totalItems = mounted ? getTotalItems() : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-100 shadow-lg lg:hidden">
      <div className="flex items-center justify-around py-3 px-2">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-700 hover:text-brand transition-colors">
          <HomeIcon className="h-6 w-6" />
          <span className="text-[10px] font-semibold">Home</span>
        </Link>
        
        <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-brand transition-colors">
          <GridIcon className="h-6 w-6" />
          <span className="text-[10px] font-semibold">Categories</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-gray-700 hover:text-brand transition-colors">
          <SearchIcon className="h-6 w-6" />
          <span className="text-[10px] font-semibold">Search</span>
        </button>
        
        <Link href="/cart" className="relative flex flex-col items-center gap-1 text-gray-700 hover:text-brand transition-colors">
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="absolute -top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
            {totalItems}
          </span>
          <span className="text-[10px] font-semibold">Cart</span>
        </Link>
        
        <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-700 hover:text-brand transition-colors">
          <UserIcon className="h-6 w-6" />
          <span className="text-[10px] font-semibold">Account</span>
        </Link>
      </div>
    </div>
  );
};
