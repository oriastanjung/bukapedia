import React, {useEffect, useRef, useState} from 'react'
import {UseHome} from "../Home/useHome.js";

import '../../assets/additional_for_recap_table/css/main.css';
import '../../assets/additional_for_recap_table/css/util.css';


const Recap = () => {
    const {product} = UseHome();
    const ref  = useRef();

    const [total_terjual, setTotal_terjual] = useState(0);
    const [total_pendapatan, setTotal_pendapatan] = useState(0);

    const minus = (index,item) =>{
        if(eval(document.getElementById(`input_${index}`).value) > 0){
            let element = document.getElementById(`input_${index}`);
            element.value = eval(element.value) - 1;
            setTotal_terjual( total_terjual - 1 );
            document.getElementById(`total_${index}`).innerHTML = "$ "+
                (eval(element.value)* item.price).toFixed(2)
        }
    }

    const plus = (index,item) => {
        let element = document.getElementById(`input_${index}`);
        element.value = eval(element.value) + 1;
        setTotal_terjual( total_terjual + 1);
        document.getElementById(`total_${index}`).innerHTML = "$ "+
             (eval(element.value)* item.price).toFixed(2)
    }

    useEffect(() => {
        let result = 0
        let stringg = (i) => document.getElementById(`total_${i}`).innerHTML
        for (let i = 0; i < product.length; i++) {
            result += eval(stringg(i).slice(2, stringg(i).length ))
        }
        setTotal_pendapatan(result)
    }, [total_terjual]);


    return (
        <div className="">
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100">

                        <table className='table100'>
                            <thead>
                            <tr className="table100-head">
                                <th className="column1">Jumlah Produk</th>
                                <th className="column2">Total Terjual</th>
                                <th className="column3">Total Penghasilan</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td className="column1">{product.length}</td>
                                <td className="column2">{total_terjual}</td>
                                <td className="column3">$ {total_pendapatan.toFixed(2)}</td>
                            </tr>
                            </tbody>
                        </table>

                        <table style={{marginTop: '10px'}}>
                            <thead>
                            <tr className="table100-head">
                                <th className="column1">Nama Produk</th>
                                <th className="column2">Deskripsi</th>
                                <th className="column3">Kategori</th>
                                <th className="column4">Harga</th>
                                <th className="column6">Terjual</th>
                                <th className="column6">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {product?.map((item,i)=>{
                                return(
                                <tr key={i}>
                                <td className="column1">{item.title.slice(0,20)}...</td>
                                <td className="column2">{item.description.slice(0, 30) }...</td>
                                <td className="column3">{item.category}</td>
                                <td className="column4">$ {item.price}</td>
                                <td className="column5" >
                                    <div className="number">
                                        <button className="span_huhu minus "
                                              onClick={()=>minus(i, item)}
                                        >-</button>

                                        <input id={`input_${i}`} ref={ref} type="number" className='input_huhu' defaultValue={0} min={0}
                                            onChange={() => document.getElementById(`total_${i}`).value =
                                                document.getElementById(`input_${i}`).value * item.price}
                                               disabled={true}
                                        />

                                        <button className="span_huhu plus "
                                                onClick={() => plus(i, item) }
                                        >+</button>
                                    </div>
                                </td>
                                <td className="column6" id={`total_${i}`}>$ 0</td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recap;