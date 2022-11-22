import React, { useState, useEffect } from "react";
import TotalAll from "./useSum";
import useCartItems from "../../component/molecules/CartItems/useCartItems";
import axios from "axios";
import useSum from "./useSum";
const Sum = ({data}) => {
  console.log(data, "data");
  // const data = props.data;
  // const [total, setTotal] = useState(0);
  // let tempTotal = 0
  // const [dataProduct, setDataProduct] = useState([]);
  // const tempData = [];
  // async function getProduct(id,qty) {
  //   try {
  //     const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //     return {data :res.data, quantity : qty};
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const fixedPromiseData = [];
  
  // useEffect(() => {
  //   for (let i = 0; i < data.length; i++) {
  //     let temp = getProduct(data[i].productId, data[i].quantity);
  //     tempData.push(temp);
  //   }
  //   Promise.all(tempData).then((res) => {
  //     console.log("res >> ", res);
      
  //     fixedPromiseData.push(res);
  //     // setDataProduct(res)
  //   });    
  //   console.log("fixedata >> ", fixedPromiseData);
    
  //   setDataProduct(fixedPromiseData);

  // }, []);

  // const countTotal = () => {
  //   dataProduct.map((item, key) => {
  //     if(key == 0){
  //       item.map((product) => {
  //         console.log("product >>> ", product);
  //         tempTotal = tempTotal + product.quantity* product.data.price
  //       })
  //     }
  //   })
  //   return tempTotal
  
  // }
  // useEffect(() => {
  //   if(dataProduct){
  //     setTotal(countTotal() + total)
  //   }
  // },[dataProduct])

  // console.log(JSON.parse(data), "dasad");
// const [datas, setDatas] = useState([])


// if(localStorage.getItem('total')){
  //   localStorage.removeItem('total')
  
  // useEffect(()=>{
    //   local.map((item, i)=>{
      //     axios.get(`https://fakestoreapi.com/products/${item.productId}`)
      //     .then(res => {
        //         // data.push(res.data)
        //         if(res){
          //           // setDatas(datas + (res.data.price * item.quantity))
  //           const suma = res.data.price 
  //           const quan = item.quantity
  //           const sum = suma * quan + localStorage.getItem('total')
  //          localStorage.setItem('total', sum)
  
  
  
  
  
  //           // setDatas(minjem.push(sum))
  
  //           // console.log(suma , "suma", " * ", quan, " quan = " , datas);
  
  //           //  setDatas([...datas, res.data])
  //           // console.log((item.quantity * res.data.price , "mantul", i));
  //         } else{
    //           null
    //         }
    //       })
    //       .catch(err => console.log(err))
    //     })
    //   },[])
    // } else{
      
      // const NilaiLocal = localStorage.getItem('total')
      // console.log(NilaiLocal, "nilai");
      
      
      useEffect(()=>{
        // setTimeout(()=>{
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
      // },2000)
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
