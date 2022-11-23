import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice/cartSlice";
import DetailProductSlice from "./reducer/detailProductSlice/DetailProductSlice";
import ProductSlice from "./reducer/ProductSlice/ProductSlice";
import userSlice from "./reducer/userSlice/userSlice";
import ProductById from "./reducer/ProductByID/ProductById";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  cart: cartSlice,
  products: ProductSlice,
  users: userSlice,
  detailProduct: DetailProductSlice,
  productID: ProductById,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export { store };
