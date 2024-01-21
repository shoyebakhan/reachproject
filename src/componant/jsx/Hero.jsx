import React from "react";
import "../css/hero.css"
import "../../../src/index.css"
function Hero()
{
    return (
        <>
        <section className="hero h-[120vh] w-[100%]  ">
            <div className="second h-[85vh] w-[40%]  ml-[100px] translate-y-24 "></div>
            <h1 className="h1 ml-[550px] text-6xl  font-semibold">Hi, <br />
            I'm Chery</h1>
            <h1 className=" h2 text-2xl mt-[500px] font-semibold">Digital Media Expert with <br />12+ Years of Professional Experience.</h1>

            <p className="pera">This is a great space to write a long text about your <br /> company and your services. You can use this space to <br /> go into a little more detail about your company. Talk <br /> about your team and what services you provide. Tell <br /> your visitors the story of how you came up with the <br /> idea for your business and what makes you different <br />from your competitors. Make your company stand out <br /> and show your visitors who you are.</p>
        </section>
        </>

    )
}
export default Hero;