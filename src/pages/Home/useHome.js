import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "../../config/store/reducer/ProductSlice/ProductSlice"
import { handleedit } from "../../component/molecules/Table/useTable"

export const UseHome =() =>{
    const product = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchProduct())
    }, [dispatch, handleedit])
    return {product}
}
