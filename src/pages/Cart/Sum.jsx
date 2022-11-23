import React, { useEffect } from "react";
import axios from "axios";
import useSum from "./useSum";
const Sum = ({data}) => {
      useEffect(()=>{
          const local = JSON.parse(data)
          localStorage.removeItem('total')
          local?.map((item, i)=>{
            axios.get(`https://fakestoreapi.com/products/${item.productId}`)
            .then(res => {
              const suma = res.data.price 
              const quan = item.quantity
              const sum  = [suma * quan]

              if(!localStorage.getItem('total')){
                localStorage.setItem('total', JSON.stringify([sum]))
              } else{
                const jos  = JSON.parse(localStorage.getItem('total'))
                localStorage.setItem('total', JSON.stringify([...jos, sum]))
              }
          })
          .catch(err => console.log(err))
        })
      },[])
     
  const {nilai}= useSum()

  useEffect(()=>{
    setTimeout(nilai, 10000)
  }, [nilai])

  return (
    <div className="flex justify-between font-bold text-xl px-32 py-16 ">
      <div>Jumlah</div>
      {
nilai ? nilai : <h1>0</h1>
      } $
    </div>
  );
};

export default Sum;
