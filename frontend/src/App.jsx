import React from "react";
import {BrowserRouter as Router , Route,Routes, Navigate} from "react-router-dom"
import Login from "./pages/Login";
import RoomOptions from "./pages/RoomOptions";
import ChatRoom from "./pages/ChatRoom";
import Logout from "./comonents/Logout";

const App = () => {
  return (
    <Router>
      <Logout/>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/rooms" element={<RoomOptions/>} />
        <Route path="/chat/:roomId" element={<ChatRoom/>} />
      </Routes>
    </Router>
  );
};

export default App;
