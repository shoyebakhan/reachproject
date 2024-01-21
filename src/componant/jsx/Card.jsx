import React from "react";
import "../css/card.css";
import "../../../src/index.css";

function Card()
{
    return (
        <>
        <section className="card h-[120vh] w-[100%] flex ">
            {/* <h1 className="head text-4xl font-bold ml-[450px] mt-[100px]">What People Say</h1> */}
            <div className="div h-[100vh] mt-[50px] w-[90%] ml-[70px] bg-teal-100">
                <h1 className=" head1 text-4xl text-center font-semibold   mt-[70px]">What People Say</h1>
            <h1 className=" heading text-6xl mt-[120px] text-center ">I'm a testimonial. Click to edit <br />  me and add text that says <br /> something nice about you and  <br />your services.</h1>
            </div>

        </section>
        </>
    )
}
export default Card;