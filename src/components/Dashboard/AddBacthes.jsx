import { SignedIn, useSession } from "@clerk/clerk-react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addBatch } from "../../store/batchSlice";
const AddBatches = () => {
  const dispatch = useDispatch();
  const { isLoaded, session } = useSession();
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    isLoaded ? setCurrentUser(session.user.username) : null;
  }, [isLoaded, session]);

  const [batchName, setBatchName] = useState("");

  const handleInputChange = (e) => {
    setBatchName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const batchData = {
      batchname: batchName,
      created_by_user_name: currentUser,
    };
    dispatch(addBatch(batchData));
    setBatchName("");
  };
  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <form
          onSubmit={handleSubmit}
          className="w-1/3 flex flex-col justify-center items-center border border-black p-4 gap-3"
        >
          <Input
            type="text"
            name="name"
            placeholder="Add Batch Name"
            value={batchName}
            onChange={handleInputChange}
            className="text-center"
          />

          <Button type="submit" className="btnHover raleway-regular font-bold">
            Add Batch
          </Button>
        </form>
      </div>
    </SignedIn>
  );
};

export default AddBatches;
