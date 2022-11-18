import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice/cartSlice";
import DetailProductSlice from "./reducer/detailProductSlice/DetailProductSlice";
import ProductSlice from "./reducer/ProductSlice/ProductSlice";
import userSlice from "./reducer/userSlice/userSlice";
import ProductById from "./reducer/ProductByID/ProductById";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductSlice,
    users: userSlice,
    detailProduct: DetailProductSlice,
    productID: ProductById
  },
});

export { store };
