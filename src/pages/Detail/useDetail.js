import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../config/store/reducer/DetailProductSlice/DetailProductSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../config/store/reducer/cartSlice/cartSlice";
function useDetail(props) {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { product } = useSelector((state) => state.detailProduct);
  const token = localStorage.getItem("token");

  const [quantity, setQuantity] = useState(1);

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

  const Addcart = () => {
    console.log("product >>> ", product);
    if (token === null) {
      naviagte("/login");
    } else {
      dispatch(addToCart({ ...product, amount: quantity }));
    }
  };
  //  const josin = JSON.parse(localStorage.getItem('local'))

  return { product, quantity, handleDecrement, handleIncrement, Addcart };
}

export default useDetail;
