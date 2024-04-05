import React from 'react'
import {RiTwitterXLine, RiFacebookFill, RiGithubFill, RiInstagramFill } from '@remixicon/react'
const Footer = () => {
  return (
    <footer className='w-full mt-20'>
        <div className="icons flex justify-center items-center gap-3">
            <a href=''><RiTwitterXLine size={30}/></a>
            <a href=''><RiFacebookFill size={30}/></a>
            <a href=''><RiGithubFill size={30}/></a>
            <a href=''><RiInstagramFill size={30}/></a>
        </div>
        <div className="tags flex flex-col justify-center items-center">
          <h1><span>©️2024</span> <span className='raleway-regular'>Attendometer || All Rights Reserved</span> </h1>
          <p className='raleway-regular'>Developed with &#9829; Nilaa Laishram</p>
        </div>
    </footer>
  )
}

export default Footer