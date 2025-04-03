import React from "react";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../navbar/navbar";
import Widgets from "../widgets/widgets";
import { useState } from "react";


const Dashboard = () => {
  const [data, setData] = useState({});
  return (
    <div className="flex">
      <Sidebar />
      <div className="border-4 border-red-600 w-full h-[100vh] overflow-auto">
        <Navbar />
        <Widgets setData={setData} />
       <div className="">
       <div>{data.name}</div>
       {/* <div>{data.action}</div> */}
       </div>
  
      </div>
    </div>
  );
};

export default Dashboard;
