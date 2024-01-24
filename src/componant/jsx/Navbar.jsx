import React from "react";
import "../css/navbar.css";
import "../../../src/index.css";
// import { FaUserCircle } from "react-icons/fa"


function Navbar()
{
    return (
        <>
            <section className="clas  w-[100%] grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 justify-items-center tablet:p-4">
                <div className=" w-[200px]">
                    <h1 className=" font-bold text-3xl">   
                        Chery Jones 
                    </h1>
                    <p className="  ">Digital Media Expert</p>
                </div>
                    <div className=" w-[200px] pt-[20px]">
                    <a href="#">log in</a>
                    <a href="#">Online Courses</a>

                </div>

            </section>
            <div className="main h-[120vh] w-[100%] ">
                <div>
                <div className="grid grid-cols-1 tablet:grid-cols-1">

                <h1 className="head text-6xl mt-[100px] ml-[170px] font-bold">Free Digital Marketing <br /> Webinar.</h1>
                <h1 className="head5 ml-[170px] text-2xl pt-[30px] ">Unlock Marketing Secrets That Work</h1>

                <button className="ml-[200px] mt-[60px] text-xl border-2 border-black rounded-full  w-[180px] font-semibold">Reserve My Spot</button>
                </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;