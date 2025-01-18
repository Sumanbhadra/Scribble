import React from "react";
import { useContext } from "react";
import { userContext } from "../App";

const JoinRoom = () => {
  const { name, setName, roomID, setRoomID } = useContext(userContext);
  console.log(roomID);

  return (
    <div className="">
      <div className="my-20 text-9xl font-bold font-serif text-center text-purple-300 ">
        Skecho
      </div>
      <form className=" flex flex-col justify-center items-center gap-2 text-2xl  text-center ">
        <input
          type="text"
          placeholder="Your name"
          required
          className="p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Room ID"
          required
          className="p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white"
          onChange={(e) => setRoomID(e.target.value)}
        ></input>

        <button className="bg-green-700 text-emerald-200 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white">
          Join Room
        </button>
      </form>
    </div>
  );
};

export default JoinRoom;
