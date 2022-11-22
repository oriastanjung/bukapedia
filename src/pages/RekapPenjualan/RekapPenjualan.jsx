import React from 'react'
import { TabelRekappenjualan, Tableadmin } from '../../component/molecules'

const RekapPenjualan = () => {
  return (
    <div className='px-5 w-full'>
    <h1 className='font-extrabold text-6xl my-4'>Rekap Penjualan</h1>
    <TabelRekappenjualan />
</div>
  )
}

export default RekapPenjualan