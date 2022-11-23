import React from 'react'
import { Button, Input } from '../../atoms';
import useCartItems from './useCartItems';

const CartItems = ({data, idbarang}) => {
  const {productId, quantity } = data
  const {dataProduct, Total} = useCartItems(productId)
  const {title, price, rating, image, id, description, category} = dataProduct
  const {sumALL} = Total(quantity, price)
  
  return (
    <div>
          <div className="flex w-full mt-3 font-bold capitalize items-center bg-slate-100">
            <div className="w-8/12 flex items-center gap-7">
              <div className='h-48 flex justify-center items-center'>
                <img src={image} alt="imageproduct" className='w-32'/>
              </div>
              <div>
                <p>{title}</p>
              </div>
            </div>
            <div className="w-1/12">{price}</div>
            <div className="w-2/12 pr-10 flex items-center gap-x-2">
              <Button name={"-"} className="bg-white "/>
              <Input className={''} value={quantity} type="number"/>
              <Button name={"+"} />
              
            </div>
            <div className="w-1/12">{sumALL} $</div>
          </div>
    </div>
  )
}

export default CartItems