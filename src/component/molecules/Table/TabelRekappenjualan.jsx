import React from 'react'

const TabelRekappenjualan = () => {
  return (
    <>
    <table className='w-full '>
        <thead className='bo-rounded-2xl text-left bg-black text-white h-14 rounded-xl '>
                <tr>
                    <th className='w-8/12 pl-4'>Product</th>
                    <th className='w-1/12'>Harga</th>
                    <th className='w-1/12'>Terjual</th>
                    <th className='w-2/12'>Pendapatan</th>
                </tr>
        </thead>

        {/* {product?.map((item, i)=>{
            return(
                <>
                    <tbody className='align-top even:bg-green-100' key={item.i} >
                        <tr className=''>
                        <Cardtableadmin item = {item} />    
                        </tr>
                    </tbody>    
                </>
            )
        })} */}  
    </table>
    <div className='flex justify-end bg-green-100 text-black font-bold text-xl px-10 py-3'>
        TOTAL PENDAPATAN 19919 $
    </div>
    </>
  )
}

export default TabelRekappenjualan