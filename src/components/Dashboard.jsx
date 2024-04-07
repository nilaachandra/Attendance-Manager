import React from "react";
import { SignedIn } from "@clerk/clerk-react";
const Dashboard = () => {
  return (
    <SignedIn>
      <div className="w-full flex justify-center items-center h-[50vh] font-bold text-4xl raleway-bold uppercase">
        This is my Dashboard
      </div>
    </SignedIn>
  );
};

export default Dashboard;
