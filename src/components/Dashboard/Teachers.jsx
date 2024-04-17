import React from "react";
import { SignedIn } from "@clerk/clerk-react";
import IconBtn from "../reusable/IconBtn";
import { RiBookFill,RiHealthBookFill} from "@remixicon/react";

const Teachers = () => {
  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <div className="lg:w-1/3 w-full flex flex-col gap-3">
          <IconBtn icon={<RiBookFill size={30} />} desc="Teachers" href="" />
          <IconBtn
            icon={<RiHealthBookFill size={30} />}
            desc="Add Teachers"
            href="add-teachers"
          />
        </div>
      </div>
    </SignedIn>
  );
};

export default Teachers;