import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Cart() {
  const [cart, setCart] = useState([])
  const [cartLength, setCartLength] = useState(5)

  // const price= 0;
  async function getCart(){
    try {
      // const response = await axios.request(`https://fakestoreapi.com/products/category/${category}`);
      const {data} = await axios.request(`https://dummyjson.com/carts/10`);
      setCart(data.products);
      console.log(data.products);
    } catch (error) {
      console.error(error);
    }
}

// update data from cart
async function updateCart(title,quantity,productID){
 
  console.log(`title: ${title}, productID: ${productID}`);

    const response = fetch(`https://dummyjson.com/products/${productID}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `${title} +1`
        // title 
      })
    })
    // getCart()
    .then(res => res.json())
    .then(console.log);
    console.log(response);
 
}

// Deleted FromCart
async function deleteCart(productID){
  // try {
  //   const {data} = await axios.request(`https://dummyjson.com/carts/10`);
  //   setCart(data.products);
  //   console.log(data.products);
  // } catch (error) {
  //   console.error(error);
  // }
  let filteredArray = cart.filter(product => product.id!== productID);
  setCart(filteredArray);
  setCartLength(filteredArray.length - 1);
  console.log(cartLength);
}







  // Use EFFECT
  useEffect(()=>{
    getCart() ;
},[])
  return (
    <div className='container'>
      <table class="table">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">price</th>
      <th scope="col">discount</th>
      <th scope="col">quantity</th>
      <th scope="col">Total</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {cart.map((product)=>{
      return (
        <tr>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{(product.discountPercentage * product.price /100).toFixed(2)}</td>
        <td>{product.quantity}
        <select onChange={()=>updateCart(product.title , product.quantity,product.id)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        </select>
        </td>
        <td>{(product.price - product.discountPercentage * product.price /100).toFixed() * product.quantity}</td>
        <td className='btn bg-danger' onClick={()=>{deleteCart(product.id)}}>Deleted</td>
        </tr>
      )
    })}
   <tr>
    <td colSpan="4">Total Price</td>
    <td>{cart.map((product)=>{
      return(
      <td>{(product.price).toFixed() * product.quantity}</td>
      )
    })}</td>
   </tr>
 
  </tbody>
</table>
    </div>
  )
}
