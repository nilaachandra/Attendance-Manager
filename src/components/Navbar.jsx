import React from 'react'
import logo from '../assets/logo 2.png'
import Button from './reusable/Button'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center py-4 px-4 lg:px-[4vw] '>
      <div className="logo flex items-center ">
        <img src={logo} alt="" width={50} height={50}/>
        <h1 className="raleway-bold lg:text-[2rem] uppercase ">Attendometer</h1>
      </div>
      <Button className='font-bold raleway-regular btnHover'>Get Started</Button>
    </nav>
  )
}

export default Navbar