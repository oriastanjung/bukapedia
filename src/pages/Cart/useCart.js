import { useDispatch, useSelector } from "react-redux";
function useCart() {
  const { cart: dummyData, total } = useSelector((state) => state.cart);

  return { dummyData, total };
}

export { useCart };

