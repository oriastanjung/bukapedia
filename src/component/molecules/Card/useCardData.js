import axios from "axios"
import { useState } from "react"

const useCardData = (value, item) => {
  const [datacrement, setIncrement] = useState(value)
  const counterIncrement =()=>{
    setIncrement(datacrement + 1)
  }
  const counterDeccrement =()=>{
    setIncrement(datacrement - 1)
  }

  const udapteDataproduct = (e)=>{
    console.log("jancok ");
    
    axios({
      method: "put",
      url: `https://fakestoreapi.com/products/${item.id}`,
      data:{
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
        rating: {
          rate : item.rating.rate,
          count : datacrement
        }
      }
    })
    .then(res => console.log(res.data, "ini kerender bro"))
    .catch(err => console.log(err))
  
  }
  return {datacrement, counterIncrement, counterDeccrement, udapteDataproduct}
}

export default useCardData