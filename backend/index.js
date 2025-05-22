import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config()

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join-room", (roomId, username) => {
    socket.join(roomId);
    console.log(`${username} joined room ${roomId}`);

    socket.to(roomId).emit("receive-message", {
      username: "System",
      text: `${username} joined the room.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),

    });
  });

  socket.on("chat-message", (roomId, message) => {
    socket.to(roomId).emit("receive-message", message);
  });

  socket.on("leave-room", (roomId, username) => {
    socket.leave(roomId);

    socket.to(roomId).emit("user-left", {
      text: `${username} left the chat.`,
      username: "System",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),

    });

    console.log(`${username} left room ${roomId}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
