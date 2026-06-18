import Image from "next/image";
import Link from "next/link";
import { PlusIcon } from "../ui/icons";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="group bg-white rounded-lg border border-gray-100 p-3 lg:p-4 hover:shadow-xl hover:border-brand/20 transition-all duration-300 flex flex-col h-full relative"
    >
      {product.tag && (
        <span className={`absolute top-3 left-3 z-10 px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase ${
          product.tag === 'Sale' ? 'bg-orange-500' : 
          product.tag === 'New' ? 'bg-brand' : 
          product.tag === 'Fresh' ? 'bg-green-500' : 'bg-blue-500'
        }`}>
          {product.tag}
        </span>
      )}
      
      <Link href={`/products/${product.slug}`} className="relative aspect-square mb-4 overflow-hidden rounded-md block bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      
      <div className="flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-sm font-bold text-brand">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
        </div>
        
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-brand transition-colors mb-4">
            {product.name}
          </h3>
        </Link>
        
        <button className="mt-auto w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-800 py-2 rounded-md text-sm font-bold transition-all hover:bg-brand hover:text-white group/btn">
          <PlusIcon className="w-4 h-4" />
          Add
        </button>
      </div>
    </div>
  );
};
