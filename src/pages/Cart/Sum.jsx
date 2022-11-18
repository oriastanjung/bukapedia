import React, { useState, useEffect } from "react";
import { useCart } from "./useCart";
import useCartItems from "../../component/molecules/CartItems/useCartItems";
import axios from "axios";
const Sum = (props) => {
  const data = props.data;
  const [total, setTotal] = useState(0);
  let tempTotal = 0
  const [dataProduct, setDataProduct] = useState([]);
  const tempData = [];
  async function getProduct(id,qty) {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return {data :res.data, quantity : qty};
    } catch (error) {
      console.log(error);
    }
  }

  const fixedPromiseData = [];
  
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      let temp = getProduct(data[i].productId, data[i].quantity);
      tempData.push(temp);
    }
    Promise.all(tempData).then((res) => {
      console.log("res >> ", res);
      
      fixedPromiseData.push(res);
      // setDataProduct(res)
    });    
    console.log("fixedata >> ", fixedPromiseData);
    
    setDataProduct(fixedPromiseData);

  }, []);

  const countTotal = () => {
    dataProduct.map((item, key) => {
      if(key == 0){
        item.map((product) => {
          console.log("product >>> ", product);
          tempTotal = tempTotal + product.quantity* product.data.price
        })
      }
    })
    return tempTotal
  
  }
  useEffect(() => {
    if(dataProduct){
      setTotal(countTotal() + total)
    }
  },[dataProduct])
  

  return (
    <div className="flex justify-between font-bold text-xl px-32 py-16 ">
      <div>Jumlah</div>
      {total}
    </div>
  );
};

export default Sum;
