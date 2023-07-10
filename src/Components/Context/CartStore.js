import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({children}){


// const options = {
//     method: 'GET',
//     url: 'https://kohls.p.rapidapi.com/categories/list',
//     headers: {
//       'X-RapidAPI-Key': 'ce136fdd8dmsh7d287ca7fd11607p127ad7jsn6f30b38b9cb5',
//       'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
//     }
//     };
    
  // Function get Category from API
//   async function addToCart(productId){
//     try {
//       // const response = await axios.request(`https://fakestoreapi.com/products/category/${category}`);
//       const {data} = await axios.request(`https://dummyjson.com/carts/7`);
//     //   setProductsDetails(response.data);
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
// }
//   async function addToCart(productId){
//     let prodID = {
//       productId
//     }
// const response = fetch('https://dummyjson.com/carts/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     userId: 1,
//     products: [
//       {
//         id: prodID,
//         quantity: 15,
//       },
//       {
//         id: 50,
//         quantity: 2,
//       },
//     ]
//   })
// })
// .then(res => res.json())
// .then(console.log);
    
//         console.log(`response is ${prodID}`)
//         return response;
//   }
// async function addToCart(){
//     try {
//       const response = await axios.request(`https://dummyjson.com/carts/1`);
//       console.log("response.data.payload.products details");
//       console.log(response.data);

//     } catch (error) {
//       console.error(error);
//     }
// }

    return <CartContext.Provider value={{  }}>{children}</CartContext.Provider>
}    