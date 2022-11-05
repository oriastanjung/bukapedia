import React from 'react'
import Button from '../../atoms/Button/Button'

const Card = () => {
  return (
    <div className='bg-white shadow-2xl rounded-xl nol:w-[100%] mobile:w-[70%] miniTablet:w-[45%] sm:w-[40%] md:w-[30%] lg:w-[19%] pb-4'>
        <div>
            <img src="https://i.ibb.co/BVTjB9Y/bg.jpg" alt="product" className=' h-56 object-cover object-right-top rounded-t-xl' />
        </div>
        <div className='text-center font-semibold text-xl py-5'>baju kaos Oblong</div>
       <div className='px-5'>
        <div> odit expedita rerum! Assumenda voluptatum nihil iusto odit, deserunt dignissimos nesciunt ex nobis.</div>
        <div className='justify-end flex mr-5 max-h-maxh-full '>
            <Button name={'Detail'}/>
        </div>
        </div>
    </div>
  )
}

export default Card