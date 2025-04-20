import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import neck1 from "../../assets/patterns/neck1.png";
import neck2 from "../../assets/patterns/neck2.png";
import neck3 from "../../assets/patterns/neck3.png";
import hand1 from "../../assets/patterns/hand1.png";
import hand2 from "../../assets/patterns/hand2.png";
import hand3 from "../../assets/patterns/hand3.png";
import bottom1 from "../../assets/patterns/bottom1.png";
import bottom2 from "../../assets/patterns/bottom2.png";
import bottom3 from "../../assets/patterns/bottom3.png";

const Customize = () => {
  const location = useLocation();
  const selectedImage = location.state?.image || "/assets/images/default.jpg";

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedNeck, setSelectedNeck] = useState(null);
  const [selectedHand, setSelectedHand] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [errors, setErrors] = useState({});

  const sizes = ["S", "M", "XL", "XXL", "XXXL", "Others"];
  const neckPatterns = [neck1, neck2, neck3];
  const handPatterns = [hand1, hand2, hand3];
  const bottomPatterns = [bottom1, bottom2, bottom3];

  const handleReadyClick = () => {
    const newErrors = {};

    // Validate size selection
    if (!selectedSize) {
      newErrors.size = "Please select a size.";
    }

    // Validate pattern selections
    if (!selectedNeck) {
      newErrors.neck = "Please select a neck design.";
    }
    if (!selectedHand) {
      newErrors.hand = "Please select a hand pattern.";
    }
    if (!selectedBottom) {
      newErrors.bottom = "Please select a bottom pattern.";
    }

    setErrors(newErrors);

    // Proceed only if no errors
    
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-4xl p-6 lg:p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-6">
          Customize Your Outfit
        </h1>

        {/* Selected Fabric Display */}
        <div className="flex justify-center">
          <img
            src={selectedImage}
            alt="Selected Fabric"
            className="w-64 h-64 object-cover rounded-lg shadow-lg border-4 border-pink-500"
          />
        </div>

        {/* Size Selection */}
        <div className="text-center mt-6">
          <h2 className="text-lg font-semibold mb-2">Select Size</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-2 rounded-full border transition duration-300 ${
                  selectedSize === size
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          {errors.size && <p className="text-red-500 mt-2">{errors.size}</p>}
        </div>

        {/* Pattern Selection */}
        {[
          {
            title: "Neck Designs",
            patterns: neckPatterns,
            state: selectedNeck,
            setState: setSelectedNeck,
            errorKey: "neck",
          },
          {
            title: "Hand Patterns",
            patterns: handPatterns,
            state: selectedHand,
            setState: setSelectedHand,
            errorKey: "hand",
          },
          {
            title: "Bottom Patterns",
            patterns: bottomPatterns,
            state: selectedBottom,
            setState: setSelectedBottom,
            errorKey: "bottom",
          },
        ].map(({ title, patterns, state, setState, errorKey }) => (
          <div key={title} className="mt-6">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="grid grid-cols-3 gap-4">
              {patterns.map((pattern, index) => (
                <img
                  key={index}
                  src={pattern}
                  alt={title}
                  className={`w-24 h-24 border rounded-lg cursor-pointer transition duration-300 ${
                    state === pattern
                      ? "border-4 border-pink-500"
                      : "border-gray-600 hover:scale-105"
                  }`}
                  onClick={() => setState(pattern)}
                />
              ))}
            </div>
            {errors[errorKey] && (
              <p className="text-red-500 mt-2">{errors[errorKey]}</p>
            )}
          </div>
        ))}

        {/* Ready Button */}
        <div className="text-center mt-8">
          <Link to="/tailors"
            onClick={handleReadyClick}
            className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-lg"
          >
            Ready
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customize;
