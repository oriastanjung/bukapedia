import React from 'react'
import {useNavbar} from './useNavbar'
const Navbar = () => {
    const {isfalse} = useNavbar()
    
  return (
        <div className={`z-999 flex gap-x-10 p-5 w-full fixed text-black font-medium cursor-pointer bg-navbarcol ${isfalse ?  'opacity-90 shadow-lg ' : 'opacity-100'}`}>
        <h1 className='font-bold'>Bukapedia</h1>
        <p>Home</p>
        <p>Login</p>
        </div>
  )
}

export default Navbar