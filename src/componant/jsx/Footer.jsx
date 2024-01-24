import React from "react";
import "../css/footer.css";
import "../../../src/index.css";

function Footer()
{
    return(

        <>
        <section className="h-[100vh] w-[100%] justify-center flex">

            <div className=" dubu1 h-[100%] w-[40%] bg-black"> 

            <h1 className="hudi text-white text-center mt-[70px] font-bold text-xl  ">Sign up for all the latest <br /> tips, tricks, and trends</h1>

            <input type="text" placeholder="Enter your Email Here" className="inp ml-[120px] mt-[50px] h-[7vh] w-[50%] bg-transparent border-2 border-orange-400 pl-[40px] hover:border-4  outline-none text-white" />

            <button className="bot border-none h-[40px] w-[170px] bg-orange-400 translate-y-10 translate-x-40 rounded-full text-xl font-semibold hover:bg-gray-600 hover:text-white ">Send </button>

            <p className="pop  text-white translate-y-24 translate-x-32  font-thin ">500 Terry A Francine Blvd. <br />San Francisco, CA 94158, USA</p>
            
            </div>



            <div className=" dubu2 h-[100%] w-[40%] ">  
            <h1 className=" text-center mt-[70px] font-bold text-xl">Yes, I want to join the webinar, <br />Sign me up!</h1>
            <button className="bot border-2 h-[50px] w-[200px]  translate-y-10 translate-x-40 rounded-full text-xl font-semibold hover:text-gray-500 border-black">Reserve My Spot</button>
             </div>

        </section>
        </>
    )
}
export default Footer;
