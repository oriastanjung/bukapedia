import axios from "axios"

const handleedit = (item) => {
     axios({
       method: 'put',       url: `https://fakestoreapi.com/products/${item.id}`,
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

   const dataPenjualan = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      detail: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      sold: 10,
      price: 109.95
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      detail: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      sold: 12,
      price:22.3
    },

   ]

   export {handleedit, dataPenjualan}
