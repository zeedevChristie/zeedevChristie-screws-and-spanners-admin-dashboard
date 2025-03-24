import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-2 border-yellow-500 px-4">
      <div className="flex justify-between items-center h-10">
      
      <Link to="/home">
        <span>LOGO</span>
      </Link>

        <h1 className="text-3xl font-bold">Screws & Spanners DashBoard</h1>

        <div className="flex items-center space-x-4">
         
          <div className="flex items-center  border-2 border-purple-500">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none "
            />
          </div>
          <div className="flex items-center ">
            <NotificationsNoneIcon />
            <div className="rounded-lg text-white bg-red-700 w-4 h-4 flex items-center justify-center ">
              1
            </div>
          </div>
          <div className="flex items-center ">
            <MailIcon />
            <div className="rounded-lg text-white bg-red-700 w-4 h-4 flex items-center justify-center ">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
