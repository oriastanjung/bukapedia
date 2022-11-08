import React from 'react'
import { hiddenpassord, viewpassword } from '../../assets/icon'
import { Button, Input } from '../../component/atoms'
import { useLogin } from './useLogin'

const Login = () => {
  const {
    isFalse, 
    handleView, 
    handleInput, 
    handleLogin } = useLogin()

  return (
    <div className='h-screen w-full bg-loginImage  bg-cover object-cover object-center -mt-16'>
     <div className='w-full h-screen flex justify-center items-center my-auto mx-auto' >
       <div>
        <Input placeholder="Username" onChange={handleInput} name="username"  className={"w-96 my-10"}/>
        <div className='flex bg-white rounded-xl items-center '>
          <Input placeholder="Password" onChange={handleInput} name="password" type={isFalse ? "password" : "text"}  className={"w-[260px] "}/>
          <img src={isFalse ? hiddenpassord : viewpassword} alt="eyes" className='w-[20px] cursor-pointer' onClick={handleView}  />
        </div>
        <div className='flex justify-center'>
          <Button name={"Login"} className={" my-5 w-40 h-14"} handleSubmit={handleLogin} />
        </div>
       </div>
     </div>
    </div>
  )
}

export default Login