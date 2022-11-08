import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../config/store/reducer/userSlice/userSlice'

const useLogin = () => {
    const dispatch = useDispatch()
    const [isFalse, setISfalse] = useState(false)

    const handleView = () =>{
        setISfalse(!isFalse)
    }
    
    const [datalogin, setDataLogin] = useState({
            username :"",
            password :""
        })

    const handleInput = (e) =>{
        setDataLogin({...datalogin, [e.target.name] : e.target.value})
    }
    const handleLogin = (e) =>{
        dispatch(fetchUsers(datalogin))
    }

  return {isFalse, handleView, handleInput, handleLogin, }
}

export {useLogin}