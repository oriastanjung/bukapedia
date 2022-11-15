import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartUser } from "../../config/store/reducer/cartSlice/cartSlice";
function useCart() {
  const dispatch = useDispatch();
  const { cart: data, total } = useSelector((state) => state.cart);
  // console.log("cart >>>> ", data);
  const userId = JSON.parse(localStorage.getItem("userid"));
  useEffect(() => {
    dispatch(fetchCartUser(userId));
  }, []);
  return { data, total };
}

export { useCart };
