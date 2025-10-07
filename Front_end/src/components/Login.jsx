import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [loginType, setLoginType] = useState("email"); // "email" | "phone"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name: formData.name,
      email: loginType === "email" ? formData.email : null,
      phone: loginType === "phone" ? formData.phone : null,
    });

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#b5d0ce]  px-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-500 text-center mb-6">
          {isSignup ? "Sign up to continue" : "Login with your email or phone"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1"
              />
            </div>
          )}

          {/* One container for Email / Phone */}
          <div className="border rounded-lg p-3">
            <div className="flex mb-3">
              <button
                type="button"
                onClick={() => setLoginType("email")}
                className={`flex-1 py-2 rounded-md font-medium transition ${
                  loginType === "email"
                    ? "bg-[#a0c3c1] text-[#1f2b2a]"
                    : "bg-gray-100 text-[#1f2b2a]"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setLoginType("phone")}
                className={`flex-1 py-2 rounded-md font-medium transition ${
                  loginType === "phone"
                    ? "bg-[#a0c3c1] text[#1f2b2a]"
                    : "bg-gray-100 text-[#1f2b2a]"
                }`}
              >
                Phone
              </button>
            </div>

            {loginType === "email" ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={loginType === "email"}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1"
              />
            ) : (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required={loginType === "phone"}
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1"
              />
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#a0c3c1] text-white py-2 rounded-lg hover:bg-[#6f8684] transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-[#6f8684] hover:underline font-medium"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
