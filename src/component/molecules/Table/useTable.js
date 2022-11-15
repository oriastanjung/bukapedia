import axios from "axios"

const handleedit = (item) => {
     axios({
       method: 'put',
       url: `https://fakestoreapi.com/products/${item.id}`,
       data: {
                     title: 'test product',
                     price: 13.5,
                     description: 'lorem ipsum set',
                     image: 'https://i.pravatar.cc',
                     category: 'electronic'
       }
     })
     .then((response) => {
       console.log(response)
     })
        .catch((error) => {
          console.log(error)
        })
   }

   export {handleedit}