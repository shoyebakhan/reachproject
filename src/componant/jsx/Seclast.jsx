import React from "react";
import "../css/seclast.css";
import "../../../src/index.css";

function Seclast()
{
    return (
        <>
        <section className="sec h-[70vh] w-[100%]  grid  grid-cols-4 ">
            <h1 className="text-4xl font-bold ml-[500px] h-[100px]
            w-[250px] translate-y-20">Featured on</h1>

            <div className=" div4 h-[25vh] w-[65%] translate-y-56 translate-x-20 "></div>
            <div className="div3 h-[25vh] w-[65%] translate-y-56 translate-x-24"></div>
            <div className="div2 h-[25vh] w-[65%] translate-y-56 translate-x-24"></div>
            <div className="div1 h-[25vh] w-[65%] translate-y-6 translate-x-12"></div>


        </section>
        </>
    )
}
export default Seclast;