import React from 'react'

const Input = ({className, type, onChange, placeholder}) => {
    const classes = `border-2 w-full focus:outline-zinc-400 border-black p-2 transition-all duration-300 rounded-md ${className || ''}`
  return (
    <input type={type} className={classes} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input