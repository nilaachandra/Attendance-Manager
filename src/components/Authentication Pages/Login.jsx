import React from 'react'
import Input from '../reusable/Input'
import Button from '../reusable/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full min-h-[50vh] flex flex-col justify-center items-center gap-2'>
      <h1 className='raleway-regular font-bold text-[20px]'>Hey! Welcome back. Login to your account.</h1>
      <form className="form w-[350px] min-h-[400px] flex flex-col items-center justify-center border-black border-2 rounded-md p-4 gap-3">
        <span className='raleway-regular font-bold'>Username</span>
        <Input className='text-center' placeholder='Enter your username'/>
        <span className='raleway-regular font-bold'>Password</span>
        <Input type='password' className='text-center' placeholder='Enter your Password'/>
        <Button className='w-full btnHover raleway-regular font-bold'>
          Login
        </Button>
        <p className='raleway-regular font-bold'>Don't have an Account? <Link to='/signup' className='text-blue-800'>Sign Up Now!</Link></p>
      </form>
    </div>
  )
}

export default Login