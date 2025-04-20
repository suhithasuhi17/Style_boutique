import React from "react";
import { Link } from "react-router-dom";
const Kurta = () => {
  return (
    
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-yellow-200 to-orange-300 p-8">
     
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Kurta Collection</h1>
      <p className="text-lg text-gray-700 mb-6">Discover the best materials for your perfect kurta.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img src="https://i.pinimg.com/736x/fb/bb/1c/fbbb1cec18c870b3cfd108bb8be6a0eb.jpg" alt="Cotton Kurta" className="rounded-full w-40 h-40 object-cover mx-auto" />
          <Link to="/cotton" className="text-xl font-semibold text-gray-800 mt-2">Cotton</Link>
          <p className="text-gray-600">Soft & Breathable</p>
        
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img src="https://i.pinimg.com/736x/ba/85/b2/ba85b2f2f7e3fc4461c5be83d4357105.jpg" alt="Silk Kurta" className="rounded-full w-40 h-40 object-cover mx-auto" />
          <Link to="/silk" className="text-xl font-semibold text-gray-800 mt-2">Silk</Link>
          <p className="text-gray-600">Elegant & Luxurious</p>
         
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <img src="https://i.pinimg.com/736x/e5/c6/fe/e5c6fe73589b38c1bae5876f2d7e69c6.jpg" alt="Rayon Kurta" className="rounded-full w-40 h-40 object-cover mx-auto" />
          <Link to="/rayon" className="text-xl font-semibold text-gray-800 mt-2">Rayon</Link>
          <p className="text-gray-600">Soft & Versatile</p>
          
        </div>
      </div>
    </div>
  );
};

export default Kurta;
