import React from 'react'

const Input = ({ onChange,className,...rest }) => {
  return (
    <input  onChange={onChange} className={`h-14 px-3 rounded-xl w-full outline-none  font-bold block ${className}`} {...rest}/>
  )
}

export default Input