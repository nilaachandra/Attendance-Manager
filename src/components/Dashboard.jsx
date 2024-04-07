import { useSession } from "@clerk/clerk-react";
 
export default function Dashboard() {
  const { isLoaded, session, isSignedIn } = useSession();
 
  if (!isLoaded) {
    // Add logic to handle loading state
    return null;
  }
  if(!isSignedIn) {
    // Add logic to handle not signed in state
    return null;
  }
 
  return (
    <div className="flex justify-center items-center font-bold raleway-regular text-[3rem] h-[50vh]">
      <p>This session has been active
      since {session.lastActiveAt.toLocaleString()}
      </p>
    </div>
  )
}