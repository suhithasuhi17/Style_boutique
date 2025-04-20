import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated import

const OrderSummary = ({ materialPrice = 1200, stitchingPrice = 800 }) => {
  const navigate = useNavigate(); // Updated hook
  const [district, setDistrict] = useState("");
  const [post, setPost] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalPrice = materialPrice + stitchingPrice;

  const handleConfirmOrder = () => {
    const newErrors = {};

    if (!district.trim()) newErrors.district = "District is required.";
    if (!post.trim()) newErrors.post = "Post is required.";
    if (!city.trim()) newErrors.city = "City is required.";
    if (!pincode.trim() || pincode.length !== 6) newErrors.pincode = "Valid Pincode is required.";
    if (!paymentMethod) newErrors.paymentMethod = "Please select a payment method.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowConfirmation(true); // Show confirmation dialog
    }
  };

  const handleOkClick = () => {
    // Redirect to the home page
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="bg-white max-w-xl mx-auto p-8 rounded-3xl shadow-2xl mt-4 text-center animate-fade-in">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Finalize Your Order</h2>

      {/* Price Breakdown */}
      <div className="mb-6 text-left space-y-2">
        <p className="text-lg font-medium text-gray-800">Material Price: ₹{materialPrice}</p>
        <p className="text-lg font-medium text-gray-800">Stitching Price: ₹{stitchingPrice}</p>
        <p className="text-xl font-bold text-green-600 mt-2">Total Price: ₹{totalPrice}</p>
      </div>

      {/* Address Fields */}
      <div className="grid grid-cols-2 gap-4 text-left mb-6">
        <div>
          <input
            type="text"
            placeholder="District"
            className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 w-full"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
          {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Post"
            className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 w-full"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          {errors.post && <p className="text-red-500 text-sm">{errors.post}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="City"
            className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Pincode"
            className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 w-full"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
        </div>
      </div>

      {/* Payment Options */}
      <div className="text-left mb-6">
        <p className="text-gray-800 font-medium mb-2">Select Payment Method:</p>
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment"
              className="form-radio text-purple-600"
              value="Online Payment"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="ml-2 text-gray-700">Online Payment</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="payment"
              className="form-radio text-purple-600"
              value="Cash on Delivery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="ml-2 text-gray-700">Cash on Delivery</span>
          </label>
        </div>
        {errors.paymentMethod && <p className="text-red-500 text-sm mt-2">{errors.paymentMethod}</p>}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirmOrder}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-bold text-lg shadow-md hover:shadow-xl hover:scale-105 transition"
      >
        Confirm Order
      </button>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Order Confirmed!</h2>
            <p className="text-gray-700 mt-4">Your total amount is ₹{totalPrice}. Thank you for your purchase ❤️</p>
            <button
              onClick={handleOkClick} // Updated to handle navigation
              className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
