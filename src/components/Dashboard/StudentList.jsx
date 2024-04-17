import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../store/getStudentSlice';
import { SignedIn, useSession } from '@clerk/clerk-react';

const StudentsList = () => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.getStudents); // Change 'state.students' to 'state.getStudents'
  const [userStudents, setUserStudents] = useState([])

  const {isLoaded, session} = useSession();
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    isLoaded ? setCurrentUser(session.user.username.toLocaleString()) : null
  }, [isLoaded, session])

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  

  return (
    <SignedIn>
    <div className='w-full justify-center items-center'>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
        <div>
          
        </div>
      )}
    </div>
    </SignedIn>
  );
};

export default StudentsList;
