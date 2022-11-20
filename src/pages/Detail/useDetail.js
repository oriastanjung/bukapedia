import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../config/store/reducer/DetailProductSlice/DetailProductSlice";
import { useCart } from "../Cart/useCart";

function useDetail(props) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.detailProduct);
  
  const [quantity, setQuantity] = useState(1);
  const {data, setData} = useCart()

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
    userId: 1,
            date : new Date(),
            products : [
              {
                productId : product.id,
                quantity : quantity
              }
            ]
        })
        .then((response)=>{
          console.log(response.data.products);
          setData([...data, response.data.products[0]])
        })
        .catch(err => console.log(err))
 }

  return { product, quantity, handleDecrement, handleIncrement, Addcart, datas : data};
}

export default useDetail;
