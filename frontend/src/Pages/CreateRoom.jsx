import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
import shortid from "shortid";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateRoom = () => {
  const { name, setName, roomID, setRoomID } = useContext(userContext);

  const generateRoomId = () => {
    
  };

  function handleSubmit(e) {
    e.preventDefault();
    const id = shortid.generate();
    setRoomID(id);
    console.log("Generated ID:", id);
    console.log("Name:", name);
    axios
      .post("http://localhost:4000/api/room", { id})
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div>
      <div>
        <div className="my-20 text-9xl font-bold font-serif text-center text-purple-300 ">
          Skecho
        </div>
        <form
          className="flex flex-col justify-center items-center gap-2 text-2xl  text-center "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your name"
            required
            className="p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white"
            onChange={(e) => setName(e.target.value)}
          ></input>

          <button
            className="bg-green-700 text-emerald-200 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white"
            
          >
            Create Room
          </button>
          <Link to={`/${roomID}`}>
            <button className="bg-green-700 text-emerald-200 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white">
              Go to Room
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
