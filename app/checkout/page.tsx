"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/hooks/use-cart-store";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { MapPinIcon, PlusIcon, XIcon } from "@/components/ui/icons";

interface Address {
  id: number;
  title: string;
  address: string;
  city: string;
  zip: string;
}

const initialAddresses: Address[] = [
  {
    id: 1,
    title: "Home",
    address: "123 Main Street, Apt 4B",
    city: "New York, NY",
    zip: "10001",
  },
  {
    id: 2,
    title: "Office",
    address: "456 Corporate Blvd, Suite 200",
    city: "Brooklyn, NY",
    zip: "11201",
  },
];

const deliverySchedules = [
  { id: 1, title: "Express Delivery", time: "Within 2 Hours", price: 5.00 },
  { id: 2, title: "Next Day Morning", time: "8:00 AM - 12:00 PM", price: 0.00 },
  { id: 3, title: "Next Day Afternoon", time: "12:00 PM - 4:00 PM", price: 0.00 },
  { id: 4, title: "Next Day Evening", time: "4:00 PM - 8:00 PM", price: 0.00 },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const clearCart = useCartStore((state) => state.clearCart);

  // States for user details
  const [contact, setContact] = useState("+1 (555) 019-2834");
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [newContactVal, setNewContactVal] = useState(contact);

  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({ title: "", address: "", city: "", zip: "" });

  const [selectedScheduleId, setSelectedScheduleId] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card">("cod");
  
  // Card states
  const [cardDetails, setCardDetails] = useState({ name: "", number: "", expiry: "", cvc: "" });

  // Coupon states
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0); // in percent
  const [couponError, setCouponError] = useState("");
  const [couponSuccessMsg, setCouponSuccessMsg] = useState("");

  // Modal success state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const tax = subtotal * 0.08;
  const shippingFee = deliverySchedules.find((s) => s.id === selectedScheduleId)?.price || 0;
  const discountAmount = subtotal * (appliedDiscount / 100);
  const total = subtotal + tax + shippingFee - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    setCouponSuccessMsg("");
    
    const formattedCode = couponCode.trim().toUpperCase();
    if (formattedCode === "BOROBAZAR10") {
      setAppliedDiscount(10);
      setCouponSuccessMsg("Coupon 'BOROBAZAR10' applied successfully! (10% Discount)");
    } else if (formattedCode === "WELCOME20") {
      setAppliedDiscount(20);
      setCouponSuccessMsg("Coupon 'WELCOME20' applied successfully! (20% Discount)");
    } else {
      setCouponError("Invalid coupon code. Try 'BOROBAZAR10' or 'WELCOME20'.");
      setAppliedDiscount(0);
    }
  };

  const handleSaveContact = () => {
    if (newContactVal.trim()) {
      setContact(newContactVal);
      setIsEditingContact(false);
    }
  };

  const handleAddAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAddress.title && newAddress.address && newAddress.city && newAddress.zip) {
      const newId = addresses.length + 1;
      const created: Address = {
        id: newId,
        title: newAddress.title,
        address: newAddress.address,
        city: newAddress.city,
        zip: newAddress.zip,
      };
      setAddresses([...addresses, created]);
      setSelectedAddressId(newId);
      setIsAddingAddress(false);
      setNewAddress({ title: "", address: "", city: "", zip: "" });
    }
  };

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    
    // Generate simple order ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderId = `BB-${new Date().getFullYear()}-${randomNum}`;
    setCreatedOrderId(orderId);
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    clearCart();
    router.push("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="container mx-auto px-4 lg:px-10">
        <Breadcrumbs items={[{ label: "Checkout" }]} />
        
        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-100 shadow-sm max-w-xl mx-auto mt-8">
            <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">Please add some groceries to your shopping bag before continuing to checkout.</p>
            <button 
              onClick={() => router.push("/products")}
              className="bg-brand text-white font-bold py-3 px-8 rounded-md hover:bg-brand-hover transition-colors inline-block shadow-md shadow-brand/20"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-6">
            {/* Left Column: Form Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Contact Number */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-50 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <h2 className="text-lg font-bold text-gray-900">Contact Number</h2>
                  </div>
                  {!isEditingContact && (
                    <button 
                      onClick={() => {
                        setNewContactVal(contact);
                        setIsEditingContact(true);
                      }} 
                      className="text-brand hover:text-brand-hover font-bold text-sm transition-colors"
                    >
                      Edit
                    </button>
                  )}
                </div>

                {isEditingContact ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={newContactVal}
                      onChange={(e) => setNewContactVal(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-brand text-sm"
                      placeholder="Enter mobile number"
                    />
                    <div className="flex gap-2">
                      <button 
                        onClick={handleSaveContact}
                        className="bg-brand text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-brand-hover transition-colors"
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setIsEditingContact(false)}
                        className="border border-gray-200 text-gray-600 px-5 py-2.5 rounded-md text-sm font-bold hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-800 text-sm font-medium">{contact}</p>
                )}
              </div>

              {/* Step 2: Shipping Address */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-50 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <h2 className="text-lg font-bold text-gray-900">Shipping Address</h2>
                  </div>
                  <button 
                    onClick={() => setIsAddingAddress(!isAddingAddress)} 
                    className="text-brand hover:text-brand-hover font-bold text-sm transition-colors flex items-center gap-1"
                  >
                    <PlusIcon className="w-4 h-4" />
                    Add Address
                  </button>
                </div>

                {isAddingAddress && (
                  <form 
                    onSubmit={handleAddAddressSubmit} 
                    className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-6 space-y-4"
                  >
                    <h3 className="font-bold text-gray-800 text-sm">New Shipping Address</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Address Type (e.g., Home, Office)</label>
                        <input
                          type="text"
                          required
                          value={newAddress.title}
                          onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })}
                          className="w-full px-3 py-2 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="Home"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">ZIP Code</label>
                        <input
                          type="text"
                          required
                          value={newAddress.zip}
                          onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                          className="w-full px-3 py-2 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="10001"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Street Address</label>
                        <input
                          type="text"
                          required
                          value={newAddress.address}
                          onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                          className="w-full px-3 py-2 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="123 Main St, Apt 4B"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">City, State</label>
                        <input
                          type="text"
                          required
                          value={newAddress.city}
                          onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                          className="w-full px-3 py-2 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end pt-2">
                      <button 
                        type="button"
                        onClick={() => setIsAddingAddress(false)}
                        className="px-4 py-2 border border-gray-200 text-gray-600 rounded text-xs font-bold hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit"
                        className="px-4 py-2 bg-brand text-white rounded text-xs font-bold hover:bg-brand-hover"
                      >
                        Add Address
                      </button>
                    </div>
                  </form>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`relative cursor-pointer bg-white border rounded-lg p-5 transition-all flex flex-col justify-between ${
                        selectedAddressId === addr.id
                          ? "border-[#00B4B4] bg-[#00B4B4]/5 shadow-[0_2px_15px_-3px_rgba(0,180,180,0.15)]"
                          : "border-gray-100 hover:border-brand hover:bg-gray-50/50"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            selectedAddressId === addr.id ? "bg-[#00B4B4] text-white" : "bg-gray-100 text-gray-600"
                          }`}>
                            {addr.title}
                          </span>
                          {selectedAddressId === addr.id && (
                            <svg className="w-5 h-5 text-[#00B4B4]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-gray-800 text-sm font-semibold mb-1">{addr.address}</p>
                        <p className="text-gray-500 text-xs">{addr.city}, {addr.zip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Delivery Schedule */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-50 pb-4 mb-6">
                  <span className="w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <h2 className="text-lg font-bold text-gray-900">Delivery Schedule</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deliverySchedules.map((schedule) => (
                    <div
                      key={schedule.id}
                      onClick={() => setSelectedScheduleId(schedule.id)}
                      className={`relative cursor-pointer bg-white border rounded-lg p-5 transition-all flex flex-col justify-between ${
                        selectedScheduleId === schedule.id
                          ? "border-[#00B4B4] bg-[#00B4B4]/5 shadow-[0_2px_15px_-3px_rgba(0,180,180,0.15)]"
                          : "border-gray-100 hover:border-brand hover:bg-gray-50/50"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-bold text-gray-800">{schedule.title}</span>
                        {selectedScheduleId === schedule.id && (
                          <svg className="w-5 h-5 text-[#00B4B4]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex justify-between items-baseline mt-4">
                        <span className="text-xs text-gray-500 font-semibold">{schedule.time}</span>
                        <span className={`text-sm font-black ${schedule.price === 0 ? "text-green-500" : "text-gray-800"}`}>
                          {schedule.price === 0 ? "Free" : `$${schedule.price.toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Payment Option */}
              <div className="bg-white rounded-lg border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-50 pb-4 mb-6">
                  <span className="w-7 h-7 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <h2 className="text-lg font-bold text-gray-900">Payment Option</h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex-1 relative cursor-pointer border rounded-lg p-5 transition-all flex items-center gap-4 ${
                      paymentMethod === "cod"
                        ? "border-[#00B4B4] bg-[#00B4B4]/5"
                        : "border-gray-100 hover:bg-gray-50/50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      paymentMethod === "cod" ? "border-[#00B4B4] text-[#00B4B4]" : "border-gray-300"
                    }`}>
                      {paymentMethod === "cod" && <div className="w-2.5 h-2.5 rounded-full bg-[#00B4B4]" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">Cash on Delivery</h4>
                      <p className="text-gray-500 text-xs mt-0.5">Pay in cash upon delivery</p>
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 relative cursor-pointer border rounded-lg p-5 transition-all flex items-center gap-4 ${
                      paymentMethod === "card"
                        ? "border-[#00B4B4] bg-[#00B4B4]/5"
                        : "border-gray-100 hover:bg-gray-50/50"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      paymentMethod === "card" ? "border-[#00B4B4] text-[#00B4B4]" : "border-gray-300"
                    }`}>
                      {paymentMethod === "card" && <div className="w-2.5 h-2.5 rounded-full bg-[#00B4B4]" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">Credit / Debit Card</h4>
                      <p className="text-gray-500 text-xs mt-0.5">Stripe and major cards supported</p>
                    </div>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 space-y-4">
                    <h4 className="font-bold text-sm text-gray-800">Card Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Cardholder Name</label>
                        <input
                          type="text"
                          required
                          value={cardDetails.name}
                          onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                          className="w-full px-3 py-2.5 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Card Number</label>
                        <input
                          type="text"
                          required
                          maxLength={19}
                          value={cardDetails.number}
                          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                          className="w-full px-3 py-2.5 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="1234 5678 1234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">Expiration Date</label>
                        <input
                          type="text"
                          required
                          maxLength={5}
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full px-3 py-2.5 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase">CVC / CVV</label>
                        <input
                          type="password"
                          required
                          maxLength={4}
                          value={cardDetails.cvc}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                          className="w-full px-3 py-2.5 rounded border border-gray-200 bg-white focus:outline-none focus:border-brand text-sm"
                          placeholder="***"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm sticky top-24 space-y-6">
                <h2 className="text-lg font-bold text-gray-900 pb-4 border-b border-gray-50">Your Order</h2>

                {/* Items List */}
                <div className="divide-y divide-gray-50 max-h-[250px] overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="py-3 flex items-center justify-between gap-4 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded border border-gray-100 flex-shrink-0 bg-gray-50 p-1">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800 line-clamp-1">{item.product.name}</span>
                          <span className="text-xs text-gray-500">{item.product.unit} x {item.quantity}</span>
                        </div>
                      </div>
                      <span className="font-bold text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                {/* Coupon Code section */}
                <div className="pt-4 border-t border-gray-100">
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none focus:border-brand bg-white"
                      placeholder="Coupon Code"
                    />
                    <button 
                      type="submit" 
                      className="bg-gray-100 text-gray-800 hover:bg-brand hover:text-white px-4 py-2 rounded text-xs font-bold transition-all"
                    >
                      Apply
                    </button>
                  </form>
                  {couponError && <p className="text-red-500 text-xs mt-1.5 font-medium">{couponError}</p>}
                  {couponSuccessMsg && <p className="text-green-500 text-xs mt-1.5 font-medium">{couponSuccessMsg}</p>}
                </div>

                {/* Bill Details */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-semibold">Subtotal</span>
                    <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-semibold">Shipping</span>
                    <span className={`font-bold ${shippingFee === 0 ? "text-green-500" : "text-gray-900"}`}>
                      {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-semibold">Tax (Estimated 8%)</span>
                    <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between items-center text-sm bg-green-50 text-green-700 px-2 py-1 rounded">
                      <span className="font-semibold">Discount ({appliedDiscount}%)</span>
                      <span className="font-black">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-base pt-3 border-t border-gray-50">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="text-lg font-black text-brand">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#00B4B4] text-white hover:bg-[#009a9a] active:scale-[0.98] py-3.5 rounded-md font-bold text-sm transition-all shadow-md shadow-[#00B4B4]/20 flex items-center justify-center gap-2"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-8 text-center shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#00B4B4]/10 text-[#00B4B4] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h3>
            <p className="text-gray-500 text-sm mb-6">Thank you for shopping with us. We have received your order and are processing it.</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left space-y-2 border border-gray-100">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-500 font-semibold">Order ID</span>
                <span className="font-bold text-gray-900">{createdOrderId}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-500 font-semibold">Total Paid</span>
                <span className="font-bold text-brand">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-500 font-semibold">Delivery Time</span>
                <span className="font-bold text-gray-800">
                  {deliverySchedules.find((s) => s.id === selectedScheduleId)?.time}
                </span>
              </div>
            </div>

            <button 
              onClick={handleCloseModal}
              className="w-full bg-[#00B4B4] hover:bg-[#009a9a] text-white py-3 rounded-md font-bold text-sm shadow-md transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
