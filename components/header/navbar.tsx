import Link from "next/link";
import { MenuIcon, ChevronDownIcon } from "../ui/icons";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shops", href: "/shops" },
    { name: "Offers", href: "/offers" },
    { name: "Contact", href: "/contact" },
    { name: "Pages", href: "/pages" },
  ];

  return (
    <div className="border-b border-gray-100 bg-white lg:block hidden">
      <div className="container mx-auto flex items-center px-4 lg:px-10">
        {/* Categories Dropdown */}
        <div className="flex items-center gap-3 bg-brand px-6 py-3.5 text-white font-semibold cursor-pointer min-w-[270px]">
          <MenuIcon className="h-5 w-5" />
          <span className="text-sm">Browse Categories</span>
          <ChevronDownIcon className="h-4 w-4 ml-auto text-white/70" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-10 ml-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-brand transition-colors flex items-center gap-1.5 py-4"
            >
              {link.name}
              {(link.name === "Pages" || link.name === "Home") && (
                <ChevronDownIcon className="h-3 w-3 text-gray-400" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side link */}
        <div className="ml-auto">
          <Link 
            href="/become-seller" 
            className="text-sm font-semibold text-gray-700 hover:text-brand transition-colors"
          >
            Become a Seller
          </Link>
        </div>
      </div>
    </div>
  );
};
