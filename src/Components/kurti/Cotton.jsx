import React from "react";
import Cart from "./cart";
import { Link } from "react-router-dom";
import cotton1 from "../../assets/images/cotton1.jpg";
import cotton2 from "../../assets/images/cotton2.png";
import cotton3 from "../../assets/images/cotton3.png";
import cotton4 from "../../assets/images/cotton4.png";
import cotton5 from "../../assets/images/cotton5.png";
import cotton6 from "../../assets/images/cotton6.png";
import cotton7 from "../../assets/images/cotton7.png";
import cotton8 from "../../assets/images/cotton8.png";
import cotton9 from "../../assets/images/cotton9.png";

const Cotton = () => {
  const cottonMaterials = [
    { id: 1, image: cotton1, description: "Soft & Breathable" },
    { id: 2, image: cotton2, description: "Eco-Friendly Fabric" },
    { id: 3, image: cotton3, description: "Premium Quality" },
    { id: 4, image: cotton4, description: "Traditional Weave" },
    { id: 5, image: cotton5, description: "Light & Durable" },
    { id: 6, image: cotton6, description: "Handloom Crafted" },
    { id: 7, image: cotton7, description: "Skin-Friendly" },
    { id: 8, image: cotton8, description: "Elegant Texture" },
    { id: 9, image: cotton9, description: "Rich Colors" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Cart />
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
        Cotton Collection
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover the finest cotton fabrics for your perfect outfit.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {cottonMaterials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="h-48 flex justify-center items-center bg-gray-200">
              <img
                src={item.image}
                alt="Cotton Material"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-lg mb-4 font-semibold text-gray-700">
                {item.description}
              </p>
              <Link
                to="/customize"
                state={{ image: item.image }}
                className="mb-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
              >
                Customize
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cotton;
