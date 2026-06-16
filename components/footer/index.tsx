"use client";

import Link from "next/link";
import { Logo } from "../ui/logo";

const footerLinks = [
  {
    title: "Social",
    links: [
      { name: "Instagram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Youtube", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "youremail@email.com", href: "mailto:youremail@email.com" },
      { name: "example@email.com", href: "mailto:example@email.com" },
      { name: "+880 12345678", href: "tel:+88012345678" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Support Center", href: "#" },
      { name: "Customer Support", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Copyright", href: "#" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { name: "FAQ & Helps", href: "#" },
      { name: "Shipping & Delivery", href: "#" },
      { name: "Return & Exchanges", href: "#" },
    ],
  },
  {
    title: "Our Information",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Site Map", href: "#" },
    ],
  },
  {
    title: "Top Categories",
    links: [
      { name: "Fruits & Vegetables", href: "#" },
      { name: "Meat & Fish", href: "#" },
      { name: "Dairy & Eggs", href: "#" },
      { name: "Beverages", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Newsletter Section */}
        <div className="bg-brand/5 rounded-xl p-8 lg:p-12 mb-16 lg:mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-600">
              Be the first to know about our latest products and exclusive offers.
            </p>
          </div>
          <form className="flex w-full lg:w-auto max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-brand transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="bg-brand text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-10 pb-12 lg:pb-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base font-bold text-gray-900 mb-5 lg:mb-7">
                {section.title}
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-brand transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
            <Logo />
            <p className="text-sm text-gray-500">
              © Copyright {new Date().getFullYear()}{" "}
              <Link href="/" className="font-bold text-gray-900 hover:text-brand transition-colors">
                BoroBazar
              </Link>
              . All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {["Mastercard", "Visa", "Paypal", "JCB", "Skrill"].map((payment) => (
              <div
                key={payment}
                className="w-10 lg:w-12 h-6 lg:h-8 rounded border border-gray-200 flex items-center justify-center text-[8px] lg:text-[10px] font-bold text-gray-400 uppercase bg-gray-50/50 hover:bg-white hover:border-brand hover:text-brand transition-all cursor-default select-none"
                title={payment}
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
