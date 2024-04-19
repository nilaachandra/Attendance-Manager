import React from 'react'

const Input = ({className, type, onChange, placeholder,name,value}) => {
    const classes = `border-2 focus:outline-zinc-400 border-black p-2 transition-all duration-300 rounded-md ${className || ''}`
  return (
    <input type={type} className={classes} onChange={onChange} name={name} placeholder={placeholder} value={value}/>
  )
}

export default Input