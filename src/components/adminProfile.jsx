import React from "react";
import AdminAvatar from "../assets/images/image.png";

const AdminProfile = () => {
  return (
    <div className="flex flex-col items-center  bg-transparent rounded-lg">
      <img
      src={AdminAvatar}
         alt="Admin Profile"
        className="w-22 h-24 rounded-full "
      />
      <h2 className=" font-semibold text-gray-700"> Tmak</h2>
      <p className="text-gray-500">Administrator</p>
      
    </div>
  );
};

export default AdminProfile;
