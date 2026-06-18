"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { PlusIcon, MinusIcon, CartIcon, HeartIcon } from "@/components/ui/icons";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGrid } from "./product-grid";

interface ProductDetailsProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity((prev) => prev + 1);
    else if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const images = product.gallery && product.gallery.length > 0 
    ? [product.image, ...product.gallery] 
    : [product.image];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-10 py-6">
        <Breadcrumbs 
          items={[
            { label: "Products", href: "/products" },
            { label: product.name }
          ]} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8">
          {/* Product Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-xl bg-gray-50 overflow-hidden border border-gray-100">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain p-8"
              />
              {product.tag && (
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded text-xs font-bold text-white uppercase ${
                  product.tag === 'Sale' ? 'bg-orange-500' : 
                  product.tag === 'New' ? 'bg-brand' : 
                  product.tag === 'Fresh' ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  {product.tag}
                </span>
              )}
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img ? "border-brand" : "border-gray-100 hover:border-brand/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx}`}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-brand">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-gray-500">/ {product.unit}</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description || "Satisfy your cravings with our premium selection. Sourced from the finest ingredients, this product promises quality and taste that you'll love. Perfect for any occasion, it's a must-have in your kitchen."}
            </p>

            <div className="flex flex-col gap-6">
              {/* Quantity Selector & Add to Cart */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-md h-12">
                  <button
                    onClick={() => handleQuantityChange("dec")}
                    className="w-12 h-full flex items-center justify-center hover:text-brand transition-colors border-r border-gray-200"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-full flex items-center justify-center font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("inc")}
                    className="w-12 h-full flex items-center justify-center hover:text-brand transition-colors border-l border-gray-200"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>

                <button className="flex-1 min-w-[200px] h-12 bg-brand text-white rounded-md font-bold flex items-center justify-center gap-3 hover:bg-brand/90 transition-all shadow-lg shadow-brand/20">
                  <CartIcon className="w-5 h-5" />
                  Add to Cart
                </button>

                <button className="w-12 h-12 border border-gray-200 rounded-md flex items-center justify-center hover:bg-gray-50 hover:text-red-500 transition-all">
                  <HeartIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Product Meta */}
              <div className="border-t border-gray-100 pt-6 flex flex-col gap-3">
                <div className="flex items-center text-sm">
                  <span className="font-bold text-gray-900 w-24">SKU:</span>
                  <span className="text-gray-500">{product.sku || "N/A-001"}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-bold text-gray-900 w-24">Category:</span>
                  <span className="text-brand hover:underline cursor-pointer">{product.category || "Grocery"}</span>
                </div>
                {product.tags && product.tags.length > 0 && (
                  <div className="flex items-center text-sm">
                    <span className="font-bold text-gray-900 w-24">Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600 hover:bg-brand hover:text-white cursor-pointer transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs / Additional Info */}
        <div className="mt-16 border-t border-gray-100 pt-10">
          <div className="flex gap-8 border-b border-gray-100 mb-8">
            <button className="pb-4 text-sm font-bold border-b-2 border-brand text-brand">Description</button>
            <button className="pb-4 text-sm font-medium text-gray-500 hover:text-brand">Reviews (0)</button>
          </div>
          <div className="max-w-4xl">
            <p className="text-gray-600 leading-relaxed mb-4">
              Our products are carefully selected to ensure the highest quality for our customers. We work directly with local farmers and trusted suppliers to bring you the freshest ingredients available.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>100% Organic and Natural</li>
              <li>Sourced from sustainable farms</li>
              <li>Carefully packed to preserve freshness</li>
              <li>Rich in nutrients and vitamins</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
