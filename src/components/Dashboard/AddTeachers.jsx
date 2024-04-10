import { SignedIn, useSession } from "@clerk/clerk-react";
import Button from "../reusable/Button";
import Input from "../reusable/Input";
import {useDispatch} from 'react-redux'
import { addTeacher } from "../../store/teacherSlice";
import { useState } from "react";
import { useEffect } from "react";


const AddTeachers = () => {
const dispatch = useDispatch()
const {isLoaded, isSignedIn, session} = useSession()
const [currentUser, setCurrentUser] = useState('')

useEffect(() => {
  if(isLoaded){
    setCurrentUser(session.user.username.toLocaleString())
  }
},[isLoaded])

const [teacherData, setTeacherData]= useState({
  created_by_user_id: currentUser,
})
  const handleSubmit = () => {

  }
  const handleInputChange = () => {

  }
  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center debug items-center gap-3">
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Add Teacher's Name" onChange={handleInputChange}/>
          <Button type='submit'>Add Teacher</Button>
        </form>
      </div>
    </SignedIn>
  )
}

export default AddTeachers