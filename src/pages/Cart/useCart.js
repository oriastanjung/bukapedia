import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartItems } from "../../component/molecules";

function useCart() {
  const id = localStorage.getItem("id");
  const [data, setData] = useState()
  const dispatch = useDispatch();


  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/carts/${id}`)
    .then((response) => {
      setData(response.data.products)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[dispatch])
  
  const Mantul = (josin) =>{
    // console.log("mantul josin >>> ", josin)
    return {josin}
    
  }
  return {data, Mantul}
}

export { useCart };
