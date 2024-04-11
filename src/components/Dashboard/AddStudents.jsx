import { SignedIn, useSession } from "@clerk/clerk-react";
import Input from "../reusable/Input";
import Button from "../reusable/Button";
const AddStudents = () => {
  const handleInputChange = () => {}
  const handleSubmit = () => {}
  return (
    <SignedIn>
      <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-3">
        <form onSubmit={handleSubmit} className="w-1/3 flex flex-col justify-center items-center border border-black p-4 gap-3">
          <Input type="text" name="name" placeholder="Add Students Name" onChange={handleInputChange} className='text-center'/>
          <Input type='text'/>

          <Button type='submit' className='btnHover raleway-regular font-bold'>Add Students</Button>
        </form>
      </div>
    </SignedIn>
  )
}

export default AddStudents