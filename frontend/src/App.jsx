import React from "react";
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Login from "./pages/Login";
import RoomOptions from "./pages/RoomOptions";
import ChatRoom from "./pages/ChatRoom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/rooms" element={<RoomOptions/>} />
        <Route path="/chat" element={<ChatRoom/>} />
      </Routes>
    </Router>
  );
};

export default App;
