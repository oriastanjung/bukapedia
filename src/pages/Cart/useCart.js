import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
  console.log(data, "data");
  
  return {data, setData}
}

export { useCart };
