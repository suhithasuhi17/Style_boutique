import React, { useState } from "react";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Proceed with further actions (e.g., API call)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-pink-200 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center animate-fade-in">
        {/* Boutique Branding */}
        <div className="mb-6">
          <img
            src={image}
            alt="Boutique Logo"
            className="w-20 h-20 mx-auto mb-2 rounded-full object-cover"
          />
          <h1 className="text-3xl font-extrabold text-purple-700">Boutique</h1>
          <p className="text-gray-500 text-sm">Welcome back to your style world 💃</p>
        </div>

        {/* Form */}
        <form className="space-y-5 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="text-gray-600 text-sm font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-purple-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <Link to="/" >
          <div className="w-full mt-4 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition">
          <button 
            type="submit">
            Log In
            </button>
          </div>
          </Link>
        </form>

        {/* Divider */}
        <div className="mt-6 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-purple-500 font-semibold hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
