import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {},
};

export const fetchDetailProduct = createAsyncThunk(
  "detailProduct/getData",
  async (id) => {
    try {
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const DetailProductSlice = createSlice({
  name: "detailProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetailProduct.fulfilled, (state, action) => {
      // console.log("payload >> ", action.payload);
      state.product = action.payload;
    });
  },
});

export default DetailProductSlice.reducer;
