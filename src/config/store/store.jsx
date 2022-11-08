import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice/cartSlice";
import ProductSlice from "./reducer/ProductSlice/ProductSlice";
import userSlice from "./reducer/userSlice/userSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductSlice,
    users: userSlice
  },
});

export { store };
