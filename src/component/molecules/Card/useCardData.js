import { useState } from "react"

const useCardData = (value) => {
  const [datacrement, setIncrement] = useState(value)
  const counterIncrement =()=>{
    setIncrement(datacrement + 1)
  }
  const counterDeccrement =()=>{
    setIncrement(datacrement - 1)
  }
  return {datacrement, counterIncrement, counterDeccrement}
}

export default useCardData