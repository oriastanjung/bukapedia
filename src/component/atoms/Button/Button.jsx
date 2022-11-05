import React from 'react'

const Button = ({name, ...rest}) => {
  return (
    <button className='bg-navbarcol px-5 py-2  rounded-xl' {...rest}>{name}</button>
  )
}

export default Button