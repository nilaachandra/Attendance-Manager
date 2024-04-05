import React from "react";
import Button from "./reusable/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full min-h-[48vh] flex flex-col lg:flex-row justify-between gap-3 mt-3 lg:mt-6">
      <div className="lefthero w-full lg:w-[60%] flex justify-center flex-col gap-4">
        <h1 className="raleway-bold text-[2rem] leading-[2rem] lg:leading-[3.6rem] lg:text-[3.6rem] uppercase">
          Manage Attendance Tracking : Effortless
          & Accurate.
        </h1>
        <p className="raleway-regular text-[0.8rem] lg:text-[1.2rem] w-full lg:w-[80%]">
          Effortlessly track attendance with Attendance Manager. Say goodbye to
          manual tracking. Streamline processes, boost productivity, and foster
          accountability. Transform attendance management. Experience efficiency
          today.
        </p>
        <div className="buttons flex w-full items-center gap-4 mt-2 lg:mt-4">
          <Link to='signup'><Button className='btnHover raleway-regular font-bold'>Create Account</Button></Link>
          <Link to='login'><Button className='btnHover raleway-regular font-bold'>Sign In</Button></Link>
        </div>
      </div>
      <div className="righthero w-full lg:w-[40%] flex gap-3 h-[40vh] lg:min-h-[65vh] lg:mt-0 mt-3 ">
        <div className="boxcon1 h-full w-1/2 flex flex-col gap-3">
            <div className="box1 w-full blackhue h-[40%] rounded-md flex justify-center items-center gap-2 p-2 flex-col">
                <h1 className="raleway-bold uppercase text-[1rem] lg:text-[1.8rem] leading-none text-center">Lightweight & Minimal</h1>
                <p className="uppercase text-center text-[0.8rem] lg:text-[1rem] raleway-regular font-semibold">Streamlined for optimal performance.</p>
            </div>
            <div className="box3 border-2 border-black w-full h-[60%] rounded-md flex justify-center items-center">
                Some Image
            </div>
        </div>
        <div className="boxcon2 w-1/2 flex flex-col gap-3">
            <div className="box3 border-2 border-black w-full h-[60%] rounded-md flex justify-center items-center">
                Some Image
            </div>
            <div className="box4 w-full blackhue h-[40%] rounded-md flex justify-center items-center gap-2 p-2 flex-col">
            <h1 className="raleway-bold uppercase text-[1rem] lg:text-[1.8rem] leading-none text-center">
            User-Friendly Interface
            </h1>
            <p className="uppercase text-center text-[0.8rem] lg:text-[1rem] raleway-regular font-semibold">
            Intuitive and easy to navigate.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
