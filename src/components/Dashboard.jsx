import { SignedIn, useSession } from "@clerk/clerk-react";
import Button from "./reusable/Button";
import IconBtn from "./reusable/IconBtn";
import {
  RiUserFill,
  RiUserAddFill,
  RiTeamFill,
  RiBookFill,
  RiHealthBookFill,
} from "@remixicon/react";

export default function Dashboard() {
  const { isLoaded, session, isSignedIn } = useSession();

  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if (!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }

  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[1.4rem] font-bold raleway-regular">Welcome to your Dashboard!</h1>
        <div className="lg:w-1/3 w-full flex flex-col gap-3">
          <IconBtn icon={<RiUserFill size={30} />} desc="User Profile" href='/'/>
          <IconBtn icon={<RiUserAddFill size={30} />} desc="Add Teachers" />
          <IconBtn icon={<RiTeamFill size={30} />} desc="Add Students" href='add-students' />
          <IconBtn icon={<RiBookFill size={30} />} desc="Add Batches" />
          <IconBtn icon={<RiHealthBookFill size={30} />} desc="Attendance" />
        </div>
      </div>
    </SignedIn>
  );
}
