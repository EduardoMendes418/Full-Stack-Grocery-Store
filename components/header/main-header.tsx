import { Logo } from "../ui/logo";
import { SearchBar } from "../ui/search-bar";
import { HeartIcon, ShoppingBagIcon, UserIcon, MenuIcon } from "../ui/icons";

export const MainHeader = () => {
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto h-16 lg:h-[90px] flex items-center justify-between gap-4 lg:gap-6 px-4 lg:px-10">
        <div className="flex items-center gap-3 lg:gap-4">
          <button className="lg:hidden text-gray-700 p-1 -ml-1">
            <MenuIcon className="h-6 w-6" />
          </button>
          <Logo />
        </div>

        <div className="hidden flex-1 justify-center lg:flex max-w-2xl">
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

          <div className="relative cursor-pointer hover:text-brand">
            <ShoppingBagIcon className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 lg:h-4 lg:w-4 items-center justify-center rounded-full bg-brand text-[9px] lg:text-[10px] font-bold text-white">
              2
            </span>
          </div>

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
