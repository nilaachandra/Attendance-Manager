import React from "react";
import Button from "./reusable/Button";

const Hero = () => {
  return (
    <div className="w-full h-[60vh] flex justify-between mt-6">
      <div className="lefthero w-[60%] flex justify-center flex-col gap-4">
        <h1 className="raleway-bold leading-[3.6rem] text-[3.6rem] uppercase">
          Manage Attendance Tracking : Effortless
          & Accurate.
        </h1>
        <p className="raleway-regular text-[1.2rem] w-[80%]">
          Effortlessly track attendance with Attendance Manager. Say goodbye to
          manual tracking. Streamline processes, boost productivity, and foster
          accountability. Transform attendance management. Experience efficiency
          today.
        </p>
        <div className="buttons flex w-full items-center gap-4 mt-4">
            <Button className='btnHover raleway-regular font-bold'>Create Account</Button>
            <Button className='btnHover raleway-regular font-bold'>Sign In</Button>
        </div>
      </div>
      <div className="righthero w-[40%] flex gap-3">
        <div className="boxcon1 h-full w-1/2 flex flex-col gap-3">
            <div className="box1 w-full blackhue h-[40%] rounded-md flex justify-center items-center gap-2 p-2 flex-col">
                <h1 className="raleway-bold uppercase text-[1.8rem] leading-none text-center">Lightweight & Minimal</h1>
                <p className="uppercase text-center raleway-regular font-semibold">Streamlined for optimal performance.</p>
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
            <h1 className="raleway-bold uppercase text-[1.8rem] leading-none text-center">
            User-Friendly Interface
            </h1>
            <p className="uppercase text-center raleway-regular font-semibold">
            Intuitive and easy to navigate.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
