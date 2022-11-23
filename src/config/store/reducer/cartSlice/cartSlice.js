import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cart: [
    {
      amount: 0,
      category: "men's clothing",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button ",
      id: 2,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      rating: { rate: 4.1, count: 259 },
      title: "Mens Casual Premium Slim Fit T-Shirts ",
    },
  ],
  checkout: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("action >> ", action.payload);
      const updatedTotalItem =
        state.totalAmount + action.payload.price * action.payload.amount;

      let existingCartItemIndex = state.cart.findIndex((item) => {
        return item.id === action.payload.id;
      });

      console.log("wow >> existingIndex", existingCartItemIndex);
      const existingCartItem = state.cart[existingCartItemIndex];
      console.log(" existingCartItem .>>> ", existingCartItem);
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.cart.concat(action.payload);
      }
      state.cart = updatedItems;
      state.totalAmount = updatedTotalItem;
    },
    removeFromCartAmount: (state, action) => {
      // console.log("remove cart action payload >> ", action.payload);
      // const filteredCart = state.cart.filter(
      //   (item) => item.id != action.payload
      // );
      // state.cart = filteredCart;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.cart[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.cart.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.cart];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      state.cart = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },
    addFromCartAmount: (state, action) => {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.cart[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount + existingItem.price;

      let updatedItems;

      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };
      updatedItems = [...state.cart];
      updatedItems[existingCartItemIndex] = updatedItem;

      state.cart = updatedItems;
      state.totalAmount = updatedTotalAmount;
    },

    resetCart: (state) => {
      state.cart = [];
    },
    resetCheckout: (state) => {
      state.checkout = [];
    },
    addToCheckout: (state) => {
      let cartLama = [...state.cart];

      let checkoutLama = [...state.checkout];
      let ygTidakSama = [];
      let kumpulanIndexYangSama = [];
      if (checkoutLama.length === 0) {
        state.checkout = [...cartLama];
      } else {
        for (let i = 0; i < checkoutLama.length; i++) {
          for (let j = 0; j < cartLama.length; j++) {
            if (checkoutLama[i].id == cartLama[j].id) {
              kumpulanIndexYangSama = [
                ...kumpulanIndexYangSama,
                { index: i, amount: cartLama[j].amount },
              ];
            } else {
              ygTidakSama = [...ygTidakSama, cartLama[j]];
            }
          }
        }
        console.log("kumpulan id yg sama", kumpulanIndexYangSama);
        for (let i = 0; i < kumpulanIndexYangSama.length; i++) {
          checkoutLama[kumpulanIndexYangSama[i].index].amount +=
            kumpulanIndexYangSama[i].amount;
        }
        // state.checkout = [...checkoutLama, ...ygTidakSama];
        state.checkout = [...checkoutLama, ...ygTidakSama];
      }
    },
  },
});
export const {
  addToCart,
  resetCart,
  removeFromCartAmount,
  addFromCartAmount,
  addToCheckout,
  resetCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
