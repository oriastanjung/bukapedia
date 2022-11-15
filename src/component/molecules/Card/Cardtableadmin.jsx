import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input } from '../../atoms'
import { handleedit } from '../Table/useTable'

const Cardtableadmin = ({item}) => {
  const [data, setData] = useState("")
  
  return (
    <>
      <td className='flex'>
        <div className='w-2/12'>
          <img src={item.image} alt="image" className='object-cover object-center w-full h-52 rounded-xl py-3' />
        </div>
        <div className='w-10/12 px-5'>
          <h1 className='font-bold text-3xl mb-4'>{item.title}</h1>
          <p className='font-medium text-2xl'>{item.description}</p>
          <p className='font-bold text my-2'>{item.category}</p>
        </div>
      </td>
      <td className='pr-4 pt-3'>
        <Input value={data} onChange={(e)=> e.target.value} className={"border-2 py-1 text-xl border-green-100"}/>
      </td>
      <td className="pt-3">
      <Button name={"update"} handleSubmit={handleedit(item)}  className="h-14 "/ >
      </td>
      </>
  )
}

export default Cardtableadmin