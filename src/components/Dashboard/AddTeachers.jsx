import { SignedIn, useSession } from "@clerk/clerk-react";
import Button from "../reusable/Button";
import Input from "../reusable/Input";
import { useDispatch } from 'react-redux';
import { addTeacher } from "../../store/teacherSlice";
import { useState, useEffect } from "react";


const AddTeachers = () => {
  const dispatch = useDispatch();
  const { isLoaded, session } = useSession();
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    if (isLoaded) {
      setCurrentUser(session.user.username);
    }
  }, [isLoaded, session]);

  const [teacherName, setTeacherName] = useState('');

  const handleInputChange = (e) => {
    setTeacherName(e.target.value); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = { teachername: teacherName, created_by_user_name: currentUser }; 
    dispatch(addTeacher(teacherData));
    setTeacherName('')
    
  }

  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <form onSubmit={handleSubmit} className="w-1/3 flex flex-col justify-center items-center  gap-3">
          <Input type="text" name="name" placeholder="Add Teacher's Name" value={teacherName} onChange={handleInputChange} className='text-center'/>
          <Button type='submit' className='btnHover raleway-regular font-bold'>Add Teacher</Button>
        </form>
      </div>
    </SignedIn>
  );
}

export default AddTeachers;
