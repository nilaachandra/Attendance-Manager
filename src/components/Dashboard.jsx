import { SignedIn, useSession } from "@clerk/clerk-react";
import IconBtn from "./reusable/IconBtn";
import {
  RiUserFill,
  RiUserAddFill,
  RiTeamFill,
  RiBookFill,
  RiHealthBookFill,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import supabase from "../Supabase/supabaseClient.js";

export default function Dashboard() {
  const { isLoaded,session } = useSession();  

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: userData, error } = await supabase.from('users').select('*').eq('username', session.user.username);
        if (error) {
          throw error;
        }
        if (!userData || userData.length === 0) {
          const insertedData = await supabase.from('users').insert([{ username: session.user.username, email: session.user.email }]).select();
          console.log('user created in supabase', insertedData);
        }
      } catch (error) {
        console.error('error checking/creating user in supabase', error.message);
      }
    };
    if (isLoaded && session) {
      checkUser();
    }
  }, [isLoaded, session]);
  

  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[1.4rem] font-bold raleway-regular">Welcome to your Dashboard!</h1>
        <div className="lg:w-1/3 w-full flex flex-col gap-3">
          <IconBtn icon={<RiUserFill size={30} />} desc="User Profile" href='/'/>
          <IconBtn icon={<RiUserAddFill size={30} />} desc="Add Teachers" href='add-teachers'/>
          <IconBtn icon={<RiTeamFill size={30} />} desc="Add Students" href='add-students' />
          <IconBtn icon={<RiBookFill size={30} />} desc="Add Batches" href='add-batches'/>
          <IconBtn icon={<RiHealthBookFill size={30} />} desc="Attendance" />
        </div>
      </div>
    </SignedIn>
  );
}
