import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomOptions = () => {
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState("");

  const generateRoomCode = () => {
    const roomCode = Math.random().toString(36).substr(2, 6).toUpperCase();
    navigate(`/chat/${roomCode}`);
  };

  const joinRoom = () => {
    if (joinCode.trim()) navigate(`/chat/${joinCode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Join or Create a Chat Room
        </h2>

        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter Room Code"
            className="p-2 border rounded"
            value={joinCode}
            onChange={(e)=>setJoinCode(e.target.value)}
          />
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={joinRoom}>
            Join Room
          </button>
          <div className="my-1 h-px bg-gray-300" />
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={generateRoomCode}>
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomOptions;
