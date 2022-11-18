import {  createSlice } from "@reduxjs/toolkit"


const initialState = {
    sumproduct: 0
}


const ProduyctByIDSLice = createSlice({
    name: "productID",
    initialState,
    reducers: {
        sumProduct: (state, action) => {
            state.sumproduct = state.sumproduct.concat + action.payload
        }
    }
})

const {sumProduct} = ProduyctByIDSLice.actions

export default ProduyctByIDSLice.reducer