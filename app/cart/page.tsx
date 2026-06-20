"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/hooks/use-cart-store";
import { PlusIcon, MinusIcon, XIcon, ShoppingBagIcon, ChevronRightIcon } from "@/components/ui/icons";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem, getSubtotal } = useCartStore();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const shipping = items.length > 0 ? 0 : 0; // Free shipping for now
  const tax = subtotal * 0.05; // 5% tax estimate
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBagIcon className="w-12 h-12 text-gray-300" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-8 text-center max-w-xs">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link 
          href="/products" 
          className="bg-brand text-white px-8 py-3 rounded-md font-bold hover:bg-brand/90 transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 lg:px-10 py-6">
        <Breadcrumbs 
          items={[
            { label: "Home", href: "/" },
            { label: "Shopping Cart" }
          ]} 
        />

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 bg-white rounded-t-lg border-b border-gray-100 text-sm font-bold text-gray-900">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {items.map((item) => (
              <div 
                key={item.product.id} 
                className="bg-white p-4 md:p-6 rounded-lg md:rounded-none md:first:rounded-t-lg border border-gray-100 md:border-none shadow-sm md:shadow-none flex flex-col md:grid md:grid-cols-6 md:items-center gap-4 relative group"
              >
                {/* Product Info */}
                <div className="col-span-3 flex items-center gap-4">
                  <div className="relative w-20 h-20 bg-gray-50 rounded-md overflow-hidden flex-shrink-0 border border-gray-100">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.product.slug}`} className="text-sm font-bold text-gray-900 hover:text-brand transition-colors block truncate">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Unit: {item.product.unit}</p>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-red-500 hover:text-red-600 font-medium mt-2 flex items-center gap-1 md:hidden"
                    >
                      <XIcon className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                </div>

                {/* Price (Mobile hidden, shown in total area or below name) */}
                <div className="hidden md:block text-center text-sm font-medium text-gray-900">
                  ${item.product.price.toFixed(2)}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center border border-gray-200 rounded-md h-9">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-9 h-full flex items-center justify-center hover:text-brand transition-colors border-r border-gray-200"
                    >
                      <MinusIcon className="w-3 h-3" />
                    </button>
                    <span className="w-10 h-full flex items-center justify-center text-sm font-bold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-9 h-full flex items-center justify-center hover:text-brand transition-colors border-l border-gray-200"
                    >
                      <PlusIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="flex md:block items-center justify-between md:text-right">
                  <span className="md:hidden text-sm text-gray-500 font-medium">Total:</span>
                  <span className="text-sm font-bold text-gray-900 md:text-brand">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Desktop Remove Button */}
                <button 
                  onClick={() => removeItem(item.product.id)}
                  className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-100 rounded-full items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-100 shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
              <Link 
                href="/products" 
                className="text-sm font-bold text-gray-900 flex items-center gap-2 hover:text-brand transition-colors"
              >
                <div className="rotate-180">
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
                Continue Shopping
              </Link>
              <button 
                onClick={() => useCartStore.getState().clearCart()}
                className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors"
              >
                Clear Shopping Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-50">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-500 font-bold">Free</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tax (Estimated)</span>
                  <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-brand">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-brand text-white h-12 rounded-md font-bold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 mb-4">
                Proceed to Checkout
              </button>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center">
                  Shipping costs and taxes calculated at checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
