"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchBar } from "../ui/search-bar";
import { Logo } from "../ui/logo";
import { HeartIcon, ShoppingBagIcon, UserIcon, MenuIcon } from "../ui/icons";
import { useCartStore } from "@/hooks/use-cart-store";

export const MainHeader = () => {
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const totalItems = mounted ? getTotalItems() : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white border-b border-gray-100 py-3 lg:py-5 sticky top-0 z-40">
      <div className="container mx-auto px-4 lg:px-10 flex items-center justify-between gap-4 lg:gap-8">
        <div className="flex items-center gap-4 lg:hidden">
          <MenuIcon className="h-6 w-6 text-gray-700" />
        </div>

        <Logo />

        <div className="hidden lg:flex flex-1 max-w-2xl">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 text-gray-700">
          {/* Language Switcher Placeholder */}
          <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:text-brand">
            <span className="text-sm font-semibold uppercase">English</span>
          </div>

          <div className="relative cursor-pointer hover:text-brand hidden sm:block">
            <HeartIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 lg:h-4 lg:w-4 items-center justify-center rounded-full bg-brand text-[9px] lg:text-[10px] font-bold text-white">
              0
            </span>
          </div>

          <Link href="/cart" className="relative cursor-pointer hover:text-brand">
            <ShoppingBagIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 lg:h-4 lg:w-4 items-center justify-center rounded-full bg-brand text-[9px] lg:text-[10px] font-bold text-white">
              {totalItems}
            </span>
          </Link>

          <div className="hidden cursor-pointer hover:text-brand sm:block">
            <UserIcon className="h-5 w-5 lg:h-6 lg:w-6" />
          </div>
        </div>
      </div>
      
      {/* Mobile Search - Visible only on mobile below LG */}
      <div className="px-4 pb-3 lg:hidden bg-white">
        <SearchBar />
      </div>
    </div>
  );
};
