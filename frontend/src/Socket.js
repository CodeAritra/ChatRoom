import { io } from "socket.io-client";

const url = import.meta.env.VITE_BASE_URL
console.log("url = ",url);

const socket = io(url);

export default socket;
