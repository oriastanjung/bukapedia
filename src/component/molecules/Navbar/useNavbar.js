import React, { useState } from 'react'

const useNavbar = () => {
    const [isfalse, setIsfalse] = useState(false)

    const handleNavbar = () =>{
        if(window.scrollY >= 10){
            setIsfalse(true)
        } else{
            setIsfalse(false)
        }
    }
    window.addEventListener('scroll', handleNavbar)

    return {isfalse}
}

export  {useNavbar}