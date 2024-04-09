import { SignedIn, useSession } from "@clerk/clerk-react";
import IconBtn from "./reusable/IconBtn";
import {
  RiUserFill,
  RiUserAddFill,
  RiTeamFill,
  RiBookFill,
  RiHealthBookFill,
} from "@remixicon/react";
import { useEffect } from "react";
import supabase from "../Supabase/supabaseClient.js";

export default function Dashboard() {
  const { isLoaded, isSignedIn,session } = useSession();
    
  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if(!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }

  const userUsername = session.user.username.toLocaleString()
  const userEmail = session.user.emailAddresses.toLocaleString()
  console.log(userUsername, userEmail)

useEffect(() => {
  const checkUser = async () => {
    try {
      const { data, error } = await supabase.from('users').select('*').eq('username', userUsername);
      if (error) {
        throw error;
      }
      if (!data || data.length === 0) {
        await supabase.from('users').insert([{ username: userUsername, email: userEmail}]).select();
        console.log('user created in supabase');
      }
    } catch (error) {
      console.error('error checking/creating user in supabase', error.message);
    }
  };
  checkUser();
}, [userUsername, userEmail]); // Include userUsername and userEmail in the dependency array


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
