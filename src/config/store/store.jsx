import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export { store };
