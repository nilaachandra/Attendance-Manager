import { SignedIn, useSession } from "@clerk/clerk-react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { useEffect, useState } from "react";
import supabase from "../../Supabase/supabaseClient";
const AddStudents = () => {
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

  const handleInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <SignedIn>
      <div className="w-full raleway-regular min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 flex flex-col justify-center items-center border border-black p-4 gap-3"
        >
          <label htmlFor="name" className="font-bold">
            Enter Student's name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Add Students Name"
            onChange={handleInputChange}
            className="text-center"
          />

          <label htmlFor="batch" className="font-bold">
            Select Batch
          </label>
          <select
            name="batch"
            className="w-full border border-black rounded-md p-2 font-bold"
          >
            {batches.map((item, index) => (
              <option className="font-bold" key={index}>
                {item.batchname}
              </option>
            ))}
          </select>
          <Button type="submit" className="btnHover raleway-regular font-bold">
            Add Students
          </Button>
        </form>
      </div>
    </SignedIn>
  );
};

export default AddStudents;
