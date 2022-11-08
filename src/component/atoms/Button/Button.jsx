import React from 'react'

const Button = ({ handleSubmit , name, className, ...rest}) => {
  return (
    <button onClick={handleSubmit} className={`bg-navbarcol px-5 py-2 font-bold rounded-xl ${className}`} {...rest}>{name}</button>
  )
}

export default Button