import React from "react";
import { useParams } from "react-router-dom";
import ChatBox from "../comonents/ChatBox";

const messages = [
  { username: "Aritra", time: "1:00", text: "hii..." },
  { username: "Debolina", time: "1:05", text: "hlo..." },
  { username: "Aritra", time: "1:10", text: "kmon achis??" },
  { username: "Debolina", time: "1:15", text: "valo" },
];

const ChatRoom = () => {
  const username = localStorage.getItem("username");
  const { roomId } = useParams();
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Room: {roomId}</h2>
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow mb-5">
        {messages.map((msg, idx) => (
          <ChatBox key={idx} message={msg} currentUser={username} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Type a message..."
        />
        <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
