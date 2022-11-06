import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  countTotalPrice,
} from "../../../config/store/reducer/cartSlice/cartSlice";
function useCartItems(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    dispatch(addQuantity({ id: props.id, value: e.target.value }));
    dispatch(countTotalPrice());
  };
  const getQuantity = (data) => {
    setValue(data);
  };

  return { value, setValue, onChangeHandler, getQuantity };
}

export { useCartItems };
