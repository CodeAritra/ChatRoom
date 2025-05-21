import React from "react";

const RoomOptions = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Join or Create a Chat Room
        </h2>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Create Room
        </button>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter Room Code"
            className="p-2 border rounded"
          />
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomOptions;
