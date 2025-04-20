import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Tailors = () => {
  const location = useLocation();
  const { selectedImage, selectedSize, selectedNeck, selectedHand, selectedBottom } = location.state || {};

  console.log({ selectedImage, selectedSize, selectedNeck, selectedHand, selectedBottom });

  const [address, setAddress] = useState("");
  const [selectedTailor, setSelectedTailor] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState("");

  const materialPrice = 1200;
  const stitchingPrice = 800;
  const totalPrice = materialPrice + stitchingPrice;

  const allTailors = [
    { id: 1, name: "Elegant Stitches", location: "Downtown" },
    { id: 2, name: "Fine Fit Tailors", location: "City Center" },
    { id: 3, name: "StyleCraft Tailoring", location: "Uptown" },
  ];

  // Simulate nearby tailors (filtering logic can be improved with geolocation)
  const filteredTailors = allTailors.filter((tailor) =>
    tailor.location.toLowerCase().includes(address.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
        Choose Your Tailor
      </h1>

      {/* Address Input */}
      <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow-xl mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Enter Your Current Address:
        </label>
        <input
          type="text"
          placeholder="Eg: Downtown, City Center..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Tailor Selection */}
      {address && (
        <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow-xl mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Nearby Tailors</h2>
          <div className="flex flex-col gap-3 items-center">
            {filteredTailors.length > 0 ? (
              filteredTailors.map((tailor) => (
                <button
                  key={tailor.id}
                  onClick={() => setSelectedTailor(tailor)}
                  className={`px-6 py-3 rounded-lg w-full text-center border transition font-medium ${
                    selectedTailor?.id === tailor.id
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {tailor.name} - {tailor.location}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No nearby tailors found.</p>
            )}
          </div>

          {/* Delivery Date Picker */}
          {selectedTailor && (
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">
                Choose Delivery Date:
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
              <div className="mt-4 flex justify-center">
                <Link
                  to="/ordersummary"
                  className="w-full sm:w-40 bg-purple-600 text-white text-center py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                >
                  Next
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Tailors;
