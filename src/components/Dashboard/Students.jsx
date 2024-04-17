import React from "react";
import { SignedIn } from "@clerk/clerk-react";
import IconBtn from "../reusable/IconBtn";
import { RiUserAddFill, RiTeamFill } from "@remixicon/react";

const Students = () => {
  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <div className="lg:w-1/3 w-full flex flex-col gap-3">
          <IconBtn icon={<RiTeamFill size={30} />} desc="Students" href="fetch-students" />
          <IconBtn
            icon={<RiUserAddFill size={30} />}
            desc="Add Students"
            href="add-students"
          />
        </div>
      </div>
    </SignedIn>
  );
};

export default Students;
