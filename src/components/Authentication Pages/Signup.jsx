import React from "react";
import { SignUp } from "@clerk/clerk-react";
const Signup = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <SignUp path="/signup" afterSignUpUrl="/dashboard" />
    </div>
  );
};

export default Signup;
