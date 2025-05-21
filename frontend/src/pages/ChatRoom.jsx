import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatBox from "../comonents/ChatBox";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");

  const username = localStorage.getItem("username");
  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("join-room", roomId, username);

    socket.on("receive-message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, [roomId, username]);

  const sendMessage = () => {
    const message = {
      text: inputMsg,
      username,
      time: new Date().toLocaleTimeString(),
    };
    socket.emit("chat-message", roomId, message);
    setMessages((prev) => [...prev, message]);
    setInputMsg("");
  };

  const leaveRoom = () => {
    navigate("/rooms");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4 text-center">Room: {roomId}</h2>
        <button
          onClick={leaveRoom}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm mb-3"
        >
          Leave Room
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow mb-5">
        {messages.map((msg, idx) => (
          <ChatBox key={idx} message={msg} currentUser={username} />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Type a message..."
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
