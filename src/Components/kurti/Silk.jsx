import React from "react";
import { Link } from "react-router-dom";
import silk1 from "../../assets/images/silk1.png";
import silk2 from "../../assets/images/silk2.png";
import silk3 from "../../assets/images/silk3.png";
import silk4 from "../../assets/images/silk4.png";
import silk5 from "../../assets/images/silk5.png";
import silk6 from "../../assets/images/silk6.png";
import silk7 from "../../assets/images/silk7.png";
import silk8 from "../../assets/images/silk8.png";
import silk9 from "../../assets/images/silk9.png";

const Silk = () => {
  const silkMaterials = [
    { id: 1, image: silk1, description: "Luxurious & Smooth" },
    { id: 2, image: silk2, description: "Shiny & Elegant" },
    { id: 3, image: silk3, description: "Premium Quality" },
    { id: 4, image: silk4, description: "Soft to the Touch" },
    { id: 5, image: silk5, description: "Light & Breezy" },
    { id: 6, image: silk6, description: "Breathable Fabric" },
    { id: 7, image: silk7, description: "Classic Charm" },
    { id: 8, image: silk8, description: "Rich Luster" },
    { id: 9, image: silk9, description: "Perfect for Special Occasions" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
        Silk Collection
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Explore the most exquisite silk fabrics for a premium look and feel.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {silkMaterials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="h-48 flex justify-center items-center bg-gray-200">
              <img
                src={item.image}
                alt="Silk Material"
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

export default Silk;
