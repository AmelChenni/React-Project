import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import style from './Products.module.css'
import ReactStars from "react-rating-stars-component";
import { CartContext } from '../Context/CartStore';
import { useContext } from 'react';
import {toast } from 'react-toastify';


export default function ProductDetails() {
  const [images,setImages] =useState("")
  let {id} = useParams()
  let x = '';
  // console.log(id);

  const firstExample = {
    size: 30,
    value: 4.7,
    a11y: true,
    isHalf: true,
    edit: false
  };




  const [productsDetails,setProductsDetails]=useState([])
    // function add to cart

    // const{addToCart} = useContext(CartContext);

    // async function addToCartFunction(productId){
    //   const res= await addToCart(productId);
    //   console.log(`res is ${res}`);
    // }

    async function addToCart(productId){
    //   let prodID = {
    //     productId
    //   }
  const response = fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 14,
      products: [
        {
          id: productId,
          // quantity: 15,
        }
        // {
        //   id: 50,
        //   quantity: 2,
        // },
      ]
    })
  })
  .then(res => res.json())
  .then(console.log);
  // toast.error("Error in adding to cart");

      
          console.log(`response is ${productId}`)
          toast.success(`Product added to cart`)
          return response;
    }
   
  // Function get Category from API
  async function getCategory(){
      try {
        // const response = await axios.request(`https://fakestoreapi.com/products/category/${category}`);
        const response = await axios.request(`https://dummyjson.com/products/${id}`);
        setProductsDetails(response.data);
        // console.log(response.data);



      } catch (error) {
        console.error(error);
      }
  }
  
  // Use EFFECT
  useEffect(()=>{
      getCategory() ;
  },[])


  return (
    <div className={`${style.container} container-fluid`}>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <h1>{productsDetails.title}</h1>
      <p>by : <a alt="" href='#/'>{productsDetails.brand}</a></p>
      <div className='d-flex align-items-center justify-content-start'>
        <ReactStars {...firstExample } classNames={`${style.firstE}`} />
        <div  className={`${style.rev} d-flex align-items-center justify-content-start ps-3`}>
        <a className='ms-2' alt="" href='#/'>Rating : {productsDetails.rating} </a>
        <a className='ms-2' alt="" href='#/'>Whrite a review</a>
         <a className='ms-2' alt="" href='#/'>ask a questions</a>
        </div>
        </div>
        
        
     < div className={`${style.productsDetails} `}>
      {/* images side */}
     {productsDetails.images ? 
     <div className={`${style.imgs} `}>
     { productsDetails.images.map((img,index)=>{

       return <>
              <img src={img} key={index} className={`${style.img} w-50`}
              alt=''
              onMouseOver={e => ( x = e.currentTarget.src) &&(setImages(x))}
              />
       </>
             
     })}
     </div>
     


    :""}
    {/* desc */}
      <div className={`${style.desc} mt-5 `}>
        <img src={images? images :productsDetails.thumbnail} 
      alt={productsDetails.name} 
      />

      </div>
      {/* Price */}
      <div className={`${style.pric} `}>
      <h3>$ : {productsDetails.price} REG</h3>
      <h2>$ : {productsDetails.price} SOLD</h2>


      <hr></hr>
      <p className='my-4'><i class="fa-solid fa-tag"></i> Buy one,get one 50% OFF</p>
      <hr></hr>

      <p>This product is not eligible for coupons. However, you are able to earn and redeem Kohl’s Cash® and Kohl's Rewards® on this product.</p>
      <hr></hr>

      <div className={`${style.ship} mb-4`}>
      <div><p>FREE store Pichup Today</p>
      <p>Missouri City 7.9mi</p></div>
      <i class="fa-solid fa-store"></i>
      </div>
      <div className={`${style.ship} mb-4`}>
      <div><p>Free Ship to Store</p>
      <p><i class="fa-solid fa-star text-info me-2"></i>Meyerland</p></div>
      <i class="fa-solid fa-shop"></i>
      </div>
      <div className={`${style.ship} mb-4`}>
      <div><p>ship to me</p>
      <p>Free Shipping</p></div>
      <i class="fa-solid fa-truck-fast"></i>
      </div>
      <button className={`${style.button}`} onClick={()=>addToCart(productsDetails.id)}>ADD TO CART</button>


      </div>
      </div>
     </div>
    // </div>
  )
}
