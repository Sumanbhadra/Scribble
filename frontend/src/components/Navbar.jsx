import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-10 bg-purple-500 text-slate-800 w-full">
      <ul className="flex justify-start space-x-10 ml-3 p-2">
        <Link className="hover:text-purple-950 duration-300 font-semibold font-serif" to="/">Skecho</Link>
        <Link className="hover:text-purple-950 duration-300" to="/AboutUs">About Us</Link>
        <Link className="hover:text-purple-950 duration-300" to="/howtoplay">How to Play</Link>
        <Link className="hover:text-purple-950 hover: duration-300" to="/ContactUs">Contact Us</Link>
      </ul>
    </div>
  );
};

export default Navbar;
