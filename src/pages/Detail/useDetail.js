import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../config/store/reducer/DetailProductSlice/DetailProductSlice";
function useDetail(props) {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.detailProduct);
  const data = product;
  const [quantity, setQuantity] = useState(0);

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
  return { data, quantity, handleDecrement, handleIncrement };
}

export default useDetail;
