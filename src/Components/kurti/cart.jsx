import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="fixed right-4 top-16 md:right-10 md:top-10 flex gap-4 md:gap-6 z-50">
      {/* Wishlist Button */}
      <button
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition focus:outline-none"
        aria-label="Wishlist"
      >
        <FaHeart className="text-red-500 text-lg md:text-2xl" />
      </button>

      {/* Cart Button */}
      <button
        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition focus:outline-none"
        aria-label="Cart"
      >
        <FaShoppingCart className="text-blue-500 text-lg md:text-2xl" />
      </button>
    </div>
  );
};

export default Cart;
