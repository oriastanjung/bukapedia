import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
function useCart(datatotal) {
  const id = localStorage.getItem("id");
  const [data, setData] = useState()
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!localStorage.getItem('local')){
      axios.get(`https://fakestoreapi.com/carts/${id}`)
    .then((response) => {
      localStorage.setItem('local', JSON.stringify(response.data.products))
      setData(response.data.products)
    })
    .catch((err)=>{
      console.log(err);
    })
    } else{
      console.log("");
    }
  },[dispatch])
  
  const Mantul = (josin) =>{
    return {josin}
  }

  const dataStorageChart = localStorage.getItem('local')
  return {data, dataStorageChart, Mantul, setData}
}

export { useCart }