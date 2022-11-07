import { createAsyncThunk } from "@reduxjs/toolkit"
const initialState ={
    product : []
}

export const fetchProduct = createAsyncThunk('product/all', async()=>{
  
})