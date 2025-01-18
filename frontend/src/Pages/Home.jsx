import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { name, setName } = useContext(userContext);
  return (
    <div className="mb-40">
      <div className="my-20 text-9xl font-bold font-serif text-center text-purple-300 ">
        Skecho
      </div>
      <div className=" flex justify-evenly text-2xl  text-center text-emerald-200">
        <Link to="/join">
          <button className="bg-green-700 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white duration-300">
            Join Room
          </button>
        </Link>
        <Link to="/create">
          <button className="bg-green-700 p-3 rounded-xl shadow-md shadow-purple-300 focus:bg-green-600 hover:shadow-lg hover:shadow-white duration-300">
            Create Room
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
