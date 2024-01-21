import React from "react";
import "../css/navbar.css";
import "../../../src/index.css";
// import { FaUserCircle } from "react-icons/fa"


function Navbar()
{
    return (
        <>
        <div className="main h-[120vh] w-[100%] teblet: w-[640px] leptop: w-[768px] desktop: w-[1024px]">
            <h1 className="ml-[100px] pt-[30px] font-bold text-3xl">   
                Chery Jones 
            </h1>
            <p className="ml-[100px]  ">Digital Media Expert</p>
            <button className="btn  ml-[900px] text-[15px] font-[5] "> Online Courses</button>
            <button className="btn1  ml-[1000px] text-[15px] font-[5] ">Log In</button>


            <h1 className="head text-6xl mt-[200px] ml-[170px] font-bold">Free Digital Marketing <br /> Webinar.</h1>
            <h1 className="head5 ml-[170px] text-2xl pt-[30px] ">Unlock Marketing Secrets That Work</h1>

            <button className="ml-[200px] mt-[60px] text-xl border-2 border-black rounded-full h-[9vh] w-[15%] font-semibold">Reserve My Spot</button>
    
            
        </div>
        </>
    )
}
export default Navbar;