import React from 'react'
import Input from '../reusable/Input'
import Button from '../reusable/Button'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full min-h-[50vh] flex flex-col justify-center items-center gap-2'>
      <h1 className='raleway-regular font-bold text-[20px]'>Hey! Create your account.</h1>
      <form className="form w-[350px] min-h-[400px] flex flex-col items-center justify-center border-black border-2 rounded-md p-4 gap-3">
        <span className='raleway-regular font-bold'>Email</span>
        <Input type='email' className='text-center' placeholder='Enter your Email'/>
        <span className='raleway-regular font-bold'>Password</span>
        <Input type='password' className='text-center' placeholder='Enter your Password'/>
        <span className='raleway-regular font-bold'>Confirm Password</span>
        <Input type='password' className='text-center' placeholder='Confirm your Password'/>
        <Button className='w-full btnHover raleway-regular font-bold'>
          Signup
        </Button>
        <p className='raleway-regular font-bold'>Already have an Account? <Link to='/login' className='text-blue-800'>Login Now!</Link></p>
      </form>
    </div>
  )
}

export default Signup