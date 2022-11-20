import axios from "axios"
import { useEffect, useState } from "react"

const useCartItems = (id) => {
  const [dataProduct, setDataProduct] = useState([]) 
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


  return {dataProduct,Total}
}

export default useCartItems