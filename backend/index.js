import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
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
      time: new Date().toLocaleTimeString(),
    });
  });

  socket.on("chat-message", (roomId, message) => {
    socket.to(roomId).emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
