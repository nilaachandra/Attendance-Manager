import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../store/getStudentSlice";
import { SignedIn } from "@clerk/clerk-react";

const ShowStudents = () => {
    const dispatch = useDispatch();
    const { allStudents, loading, error } = useSelector((state) => state.allStudents);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <SignedIn>
            <div>
                <h1>Student List</h1>
                <ul>
                    {allStudents.map((student) => (
                        <li>{student.name}</li>
                    ))}
                </ul>
            </div>
        </SignedIn>
    );
};

export default ShowStudents;
