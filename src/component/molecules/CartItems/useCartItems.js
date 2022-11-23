import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCartAmount,
  addFromCartAmount,
} from "../../../config/store/reducer/cartSlice/cartSlice";
const useCartItems = (data) => {
  const dispatch = useDispatch();
  const [Quantity, setQuantity] = useState(data.amount);
  const handleOnAddAmountCart = () => {
    dispatch(addFromCartAmount(data.id));
  };
  const handleOnReduceAmountCart = () => {
    dispatch(removeFromCartAmount(data.id));
  };
  return { Quantity, handleOnAddAmountCart, handleOnReduceAmountCart };
};

export default useCartItems;
