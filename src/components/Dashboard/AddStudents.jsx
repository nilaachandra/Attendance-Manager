import { SignedIn, useSession } from "@clerk/clerk-react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { useEffect, useState } from "react";
import supabase from "../../Supabase/supabaseClient";
import { useDispatch } from "react-redux";
import { addStudents } from "../../store/addStudentSlice";


const AddStudents = () => {
  const dispatch = useDispatch()
  const [batches, setBatches] = useState([]);
  const { isSignedIn, session } = useSession();

  useEffect(() => {
    const fetchUserBatches = async () => {
      try {
        if (!isSignedIn) return;

        // Retrieve batches created by the current user
        const { data, error } = await supabase
          .from("batches")
          .select("*")
          .eq("created_by_user_name", session.user.username.toLocaleString());

        if (error) {
          throw error;
        }

        setBatches(data || []);
      } catch (error) {
        console.error("Error fetching user batches:", error.message);
      }
    };

    fetchUserBatches();
  }, [isSignedIn, session]);

  const [students, setStudents] = useState({
    studentname: '',
    created_by_user_name: '',
    batchname: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const createdByUserName = session ? session.user.username.toLocaleString() : '';
    setStudents((prevData) => ({
      ...prevData,
      [name]: value,
      created_by_user_name: createdByUserName,
    }));

  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addStudents(students))
    setStudents({
      studentname: '',
      created_by_user_name: '',
      batchname: ''
    })
  };

  return (
    <SignedIn>
      <div className="w-full raleway-regular min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 flex flex-col justify-center items-center border border-black p-4 gap-3"
        >
          <label htmlFor="studentname" className="font-bold">
            Enter Student's name
          </label>
          <Input
            type="text"
            name="studentname"
            value={students.studentname}
            placeholder="Add Students Name"
            onChange={handleInputChange}
            className="text-center"
          />

          <label htmlFor="batchname" className="font-bold">
            Select Batch
          </label>
          <select
            name="batchname"
            value={students.batchname}
            className="w-full border border-black rounded-md p-2 font-bold"
            onChange={handleInputChange}
          >
            <option value="">Select Batch</option>
            {batches.map((item, index) => (
              <option className="font-bold" key={index} value={item.batchname}>
                {item.batchname}
              </option>
            ))}
          </select>
          <Button type="submit" className="btnHover raleway-regular font-bold">
            Add Students
          </Button>
        </form>k
      </div>
    </SignedIn>
  );
};

export default AddStudents;
