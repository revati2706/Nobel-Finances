import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#a1f1bd] h-20  p-5 flex justify-between items-center md:px-10">
      <Link to="/">
        {" "}
        <div className="logo">
          <h1 className="font-[nunito] text-[#2e4f22] font-bold md:text-xl">
            Nobel Finances
          </h1>
        </div>
      </Link>{" "}
      <div className="flex gap-5 items-center text-[12px] font-[nunito] ">
        <span className="">Services</span>

        <Link to="/book">
          <button className="bg-[#2e4f22] text-white p-2 rounded-full">
            <span className="block md:hidden">Book</span>
            <span className="hidden md:block">Book an appointment</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
