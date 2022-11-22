import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../config/store/reducer/DetailProductSlice/DetailProductSlice";

function useDetail(props) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.detailProduct);
  
  const [quantity, setQuantity] = useState(1);
  // const {data, setData} = useCart()

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    dispatch(fetchDetailProduct(props.id));
  }, []);

 const Addcart = () =>{
  axios.post('https://fakestoreapi.com/carts', {
    userId: localStorage.getItem("id"),
            date : new Date(),
            products : [
              {
                // id: uuidv4,
                productId : product.id,
                quantity : quantity
              }
            ]
        })
        .then((response)=>{
          const josin = JSON.parse(localStorage.getItem('local'))
          josin.map((item, i )=>{
            if(response.data.productId === !item.productId){
              const data = JSON.parse(localStorage.getItem('local'))
              const pushLocal = [...data, response.data.products[0]]
              localStorage.setItem('local', JSON.stringify(pushLocal))
              console.log("apakah ini");
            } else{
              const data = JSON.parse(localStorage.getItem('local'))
              let replace = response.data.products[0].quantity
              data[data.length - 1] = {
                productId : response.data.productId,
                quantity : data.quantity + response.data.quantity
              }
              const pushLocal = [...data]
              localStorage.setItem('local', JSON.stringify(pushLocal))
              console.log("apakah ini yang ini", data);
            }
          })
          const pushLocal = [...josin, response.data.products[0]]
          localStorage.setItem('local', JSON.stringify(pushLocal))
        })
        .catch(err => console.log(err))
 }
 const josin = JSON.parse(localStorage.getItem('local'))
console.log(josin, "josin, aowkaowk");


  return { product, quantity, handleDecrement, handleIncrement, Addcart};
}

export default useDetail;
