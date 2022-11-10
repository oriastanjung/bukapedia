import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addQuantity,
  countTotalPrice,
} from "../../../config/store/reducer/cartSlice/cartSlice";

function useCartItems(props) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    setValue(e.target.value);
    dispatch(addQuantity({ id: props.id, value: e.target.value }));
    dispatch(countTotalPrice());
  };
  const getQuantity = (data) => {
    setValue(data);
  };
  useEffect(() => {
    function getDataProduct() {
      return fetch(`https://fakestoreapi.com/products/${props.id}`).then(
        (res) => res.json()
      );
    }
    const storedPromise = getDataProduct();
    storedPromise.then((result) => {
      setData(result);
    });
    // setData(getData());
  }, []);

  return { value, setValue, onChangeHandler, getQuantity, data };
}

export { useCartItems };
