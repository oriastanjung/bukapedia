import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState ={
    products : []
}

export const fetchProduct = createAsyncThunk('product/all', async() =>{
    try{
        const repsonse = await axios.get(`https://fakestoreapi.com/products`)
        return repsonse.data
    } catch(error){
        console.log(error);
        return error.repsonse
    }
})



const productSlice = createSlice({
    name : 'productsall',
    initialState,
    reducers: {
    },
    extraReducers(builder){
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            state.products = action.payload
        })
    }
})

export const getAllProduct = (state) => state.productsall
export default productSlice.reducer