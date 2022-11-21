import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import useDetail from "../Detail/useDetail";
function useCart(datatotal) {
  const id = localStorage.getItem("id");
  const [data, setData] = useState()
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!localStorage.getItem('local')){
      axios.get(`https://fakestoreapi.com/carts/${id}`)
    .then((response) => {
      localStorage.setItem('local', JSON.stringify(data))
      setData(response.data.products)
    })
    .catch((err)=>{
      console.log(err);
    })
    } else{
      console.log("ada data di localStorage");
    }
  },[dispatch])
  console.log(data, "data ini data");
  
  const Mantul = (josin) =>{
    return {josin}
  }




  
  const dataStorageChart = localStorage.getItem('local')
  console.log(dataStorageChart, "baru data");
  return {data, dataStorageChart, Mantul, setData, TotalAll}
}

export { useCart }