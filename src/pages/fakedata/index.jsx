import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FaceData = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    const handletambahData = () =>{
        axios.post('https://fakestoreapi.com/products', {
            title: "test",
            price: 100,
            description: "test",
            category: "test",
            image: "test"
        })
        .then(res => setData([...data, res.data]))
        .catch(err => console.log(err))
    }
  return (
    <div>
        <button onClick={handletambahData}>josin</button>
        <div>
            <h1>
                {data?.map((item, i)=>{
                    return(
                        <div>
                            <p>{i} = {item.title}</p>
                        </div>
                    )
                })}
            </h1>
        </div>
    </div>
  )
}

export default FaceData