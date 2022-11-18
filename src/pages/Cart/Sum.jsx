import React, { useState, useEffect } from "react";
import { useCart } from "./useCart";
import useCartItems from "../../component/molecules/CartItems/useCartItems";
import axios from "axios";
const Sum = (props) => {
  const data = props.data;
  const [total, setTotal] = useState(0);

  const [dataProduct, setDataProduct] = useState([]);
  const tempData = [];
  async function getProduct(id) {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const fixedPromiseData = [];

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      let temp = getProduct(data[i].productId);
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

  
  let [temporTotal, setTemporTotal] = useState(0)

  useEffect(() => {
    console.log("data product >>> ", dataProduct)

      dataProduct.map((item, key) => {
        if (key == 0){
          item.map((product) => {
            data.map((productData) => {
              if (product.id === productData.productId){
                temporTotal = temporTotal + (product.price * productData.quantity)
              }
            })
          })
        }
      })
      console.log("tempor total " , temporTotal);
      setTemporTotal(temporTotal)

  },[dataProduct])
  return (
    <div className="flex justify-between font-bold text-xl px-32 py-16 ">
      <div>Jumlah</div>
      {
        temporTotal != 0 && <h1>{temporTotal}</h1> 
      }
      {
        temporTotal == 0 && <p>perlu render lagi di save baru nampil</p>
      }
    </div>
  );
};

export default Sum;
