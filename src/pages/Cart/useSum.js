import React, { useState } from 'react'

const useSum = () => {
    const data = JSON.parse(localStorage.getItem('total'))
    console.log(data, "data");
    let nilai = 0 
    data.map((item, i)=>{
        nilai = nilai + parseFloat(item)
        console.log(nilai, "hasil penjumlahan berkala");
    })

    return {nilai}
}

export default useSum