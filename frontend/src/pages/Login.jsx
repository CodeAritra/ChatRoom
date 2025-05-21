import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
