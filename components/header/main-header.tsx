import { Logo } from "../ui/logo";
import { SearchBar } from "../ui/search-bar";
import { HeartIcon, ShoppingBagIcon, UserIcon, MenuIcon } from "../ui/icons";

export const MainHeader = () => {
  return (
    <div className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-8 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="lg:hidden text-gray-700">
            <MenuIcon className="h-6 w-6" />
          </button>
          <Logo />
        </div>

        <div className="hidden flex-1 justify-center lg:flex">
          <SearchBar />
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <div className="relative cursor-pointer hover:text-brand hidden sm:block">
            <HeartIcon className="h-6 w-6" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              0
            </span>
          </div>
          <div className="relative cursor-pointer hover:text-brand">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              2
            </span>
          </div>
          <div className="hidden cursor-pointer hover:text-brand sm:block">
            <UserIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
      
      {/* Mobile Search - Visible only on mobile below LG */}
      <div className="mt-4 px-4 lg:hidden">
        <SearchBar />
      </div>
    </div>
  );
};
