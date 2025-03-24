import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
return (
    <>
        <div className="flex justify-center items-center h-full ">
            <div className="border-2 p-4 shadow-lg w-[30vw]">
                <div className="flex justify-between gap-4 items-center">
                    <h1 className="text-lg">Total Revenue</h1>
                    <MoreVertIcon />
                </div>
                <div className="mt-2 flex justify-center">
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={70} text={`${75}%`} strokeWidth={3} />
                    </div>
                </div>
                <div className="flex justify-between gap-4 mt-4">
                    <div className="text-center">
                        <p>Target</p>
                        <p>$5000</p>
                    </div>
                    <div className="text-center">
                        <p>Total Revenue</p>
                        <p>$5000</p>
                    </div>
                </div>
                   
            </div>
        </div>
    </>
);
};

export default Featured;
