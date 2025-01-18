import React, { useState } from "react";
import DrawingCanvas from "../components/Canvas";
import RealTimeChat from "../components/RealTimeChat";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";

const DrawAndGuess = () => {
  const { id } = useParams();
  const [playerName, setPlayerName] = useState("");
  const { name, setName } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    setName(playerName);
  }
  return (
    <>
      {name == "Guest" ? (
        <div>
          <div className="my-20 text-9xl font-bold font-serif text-center text-purple-300 ">
            Skecho
          </div>
          <form
            className="mb-28 flex flex-col justify-center items-center gap-2 text-2xl  text-center "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your name"
              required
              className="p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white"
              onChange={(e) => setPlayerName(e.target.value)}
            ></input>

            <button className="bg-green-700 text-emerald-200 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white">
              Join room
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <div className="bg-white">
              <DrawingCanvas />
            </div>
            <div className="flex justify-center gap-2  p-2">
              <RealTimeChat />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawAndGuess;
