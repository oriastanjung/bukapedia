import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const useCartItems = (id) => {
  const [dataProduct, setDataProduct] = useState([]) 
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      setDataProduct(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  const Total = (quntity, price) =>{
    const sumALL = quntity * price
    return {sumALL}
  }

  useEffect(()=>{

  },[])
  
  return {dataProduct,Total}
}

export default useCartItems