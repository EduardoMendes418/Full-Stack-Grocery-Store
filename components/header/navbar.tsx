import Link from "next/link";
import { MenuIcon, ChevronDownIcon } from "../ui/icons";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shops", href: "/shops" },
    { name: "Categories", href: "/categories" },
    { name: "Pages", href: "/pages" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="border-t border-gray-100 bg-white lg:block hidden">
      <div className="container mx-auto flex items-center px-4 lg:px-8">
        {/* Categories Dropdown */}
        <div className="flex items-center gap-3 bg-brand px-5 py-3.5 text-white font-semibold cursor-pointer rounded-t-lg min-w-[260px]">
          <MenuIcon className="h-5 w-5" />
          <span className="text-sm">Browse Categories</span>
          <ChevronDownIcon className="h-4 w-4 ml-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-brand transition-colors flex items-center gap-1"
            >
              {link.name}
              {(link.name === "Pages" || link.name === "Shops") && (
                <ChevronDownIcon className="h-3 w-3" />
              )}
            </Link>
          ))}
        </nav>

        {/* Promotional text or link */}
        <div className="ml-auto flex items-center gap-2 text-sm font-semibold text-gray-700">
            <span>Special Offers</span>
        </div>
      </div>
    </div>
  );
};
