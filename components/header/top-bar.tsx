import Link from "next/link";
import { MapPinIcon } from "../ui/icons";

export const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 hidden lg:block">
      <div className="container mx-auto flex items-center justify-between py-2.5 px-4 lg:px-10">
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                <MapPinIcon className="h-4 w-4 text-brand" />
                <span>Delivery: Dhaka, Bangladesh</span>
            </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold text-gray-700">
          <Link href="/order-tracking" className="hover:text-brand transition-colors">
            Order Tracking
          </Link>
          <Link href="/help" className="hover:text-brand transition-colors">
            Help
          </Link>
          <Link href="/wishlist" className="hover:text-brand transition-colors">
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};
