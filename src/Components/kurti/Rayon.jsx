import React from "react";
import { Link } from "react-router-dom";

const Rayon = () => {
  const rayonMaterials = [
    { id: 1, image: "/images/rayon1.jpg", description: "Soft & Comfortable" },
    { id: 2, image: "/images/rayon2.jpg", description: "Smooth & Breathable" },
    { id: 3, image: "/images/rayon3.jpg", description: "Elegant Drape" },
    { id: 4, image: "/images/rayon4.jpg", description: "Moisture Absorbent" },
    { id: 5, image: "/images/rayon5.jpg", description: "Light & Airy" },
    { id: 6, image: "/images/rayon6.jpg", description: "Silky Touch" },
    { id: 7, image: "/images/rayon7.jpg", description: "Durable & Versatile" },
    { id: 8, image: "/images/rayon8.jpg", description: "Vibrant Colors" },
    { id: 9, image: "/images/rayon9.jpg", description: "Perfect for Casual & Formal Wear" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Cart />
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-6">
        Rayon Collection
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Experience the smoothness and versatility of premium rayon fabrics.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {rayonMaterials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="h-48 flex justify-center items-center bg-gray-200">
              <img
                src={item.image}
                alt="Rayon Material"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg mb-4 font-semibold text-gray-700">
                {item.description}
              </p>
              <Link
                to="/customize"
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
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

export default Rayon;
