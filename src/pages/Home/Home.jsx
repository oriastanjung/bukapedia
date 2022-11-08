import { Card } from '../../component/molecules'
import { UseHome } from './useHome'

const Home = () => {
    const {product} = UseHome()
    return (
    <div className='mx-6'>
        <h1 className='font-extrabold text-4xl my-5 '>Product</h1>
        <div className='flex gap-5 flex-wrap justify-center'>
           {product?.map((item, i )=>{
            return(
                <Card key={i} data={item} />
            )
           })}
        </div>
    </div>
  )
}

export default Home