import React from 'react'
import { UseHome } from '../../../pages/Home/useHome'
import Cardtableadmin from '../Card/Cardtableadmin'

const Tableadmin = () => {
    const {product} = UseHome()

  return (
    <>
    <table className='w-full '>
        <thead className='bo-rounded-2xl text-left bg-black text-white h-14 rounded-xl '>
                <tr>
                    <th className='w-8/12 pl-4'>Product</th>
                    <th className='w-3/12'>Stock</th>
                    <th className='w-1/12'>Action</th>
                </tr>
        </thead>
        {product?.map((item, i)=>{
            return(
                <>
                    <tbody className='align-top even:bg-green-100' key={item.i} >
                        <tr className=''>
                        <Cardtableadmin item = {item} />    
                        </tr>
                    </tbody>    
                </>
            )
        })}
    </table>
    </>
  )
}

export default Tableadmin