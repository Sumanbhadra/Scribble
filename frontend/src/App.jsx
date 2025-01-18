import { createContext, useState } from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import JoinRoom from "./Pages/JoinRoom";
import CreateRoom from "./Pages/CreateRoom";
import DrawAndGuess from "./Pages/DrawAndGuess";
import Navbar from "./components/Navbar";
import HowToPlay from "./Pages/HowToPlay";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";

export const userContext = createContext();

function App() {
  const [name, setName] = useState("Guest");
  const [roomID, setRoomID] = useState("");
  return (
    <>
      <Navbar />
      <userContext.Provider value={{ name, setName, roomID, setRoomID }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/create" element={<CreateRoom />} />
          <Route path="/:id" element={<DrawAndGuess />} />
          <Route path="/howtoplay" element={<HowToPlay/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
      </userContext.Provider>
      <Footer/>
    </>
  );
}

export default App;
