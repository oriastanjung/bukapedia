import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 20,
      quantity: 3,
    },
    {
      id: 2,
      title: "Product 2",
      price: 30,
      quantity: 5,
    },
    {
      id: 3,
      title: "Product 3",
      price: 14,
      quantity: 15,
    },
    {
      id: 4,
      title: "Product 4",
      price: 14,
      quantity: 15,
    },
    {
      id: 5,
      title: "Product 5",
      price: 14,
      quantity: 15,
    },
    {
      id: 6,
      title: "Product 6",
      price: 14,
      quantity: 15,
    },
    {
      id: 7,
      title: "Product 7",
      price: 14,
      quantity: 15,
    },
  ],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addQuantity: (state, action) => {
      const { id, value } = action.payload;

      state.cart.map((item) => {
        if (item.id == id) {
          item.quantity = value;
        }
      });

      //   state.cart[id].quantity = value;
      //   console.log(state.cart[id].quantity); 
    },
    countTotalPrice: (state) => {
      let sum = 0;
      state.cart.map((item) => {
        return (sum += item.price * item.quantity);
      });
      state.total = sum;
    },
  },
});
export const { addQuantity, countTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
