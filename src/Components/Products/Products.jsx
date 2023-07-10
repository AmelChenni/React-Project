import axios from 'axios';
import style from './Products.module.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails';
// rating
import ReactStars from "react-rating-stars-component";




export default function Products() {
  // rating 
  const firstExample = {
    size: 30,
    value: 4.4,
    a11y: true,
    isHalf: true,
    edit: false
  };
  


    let {category} = useParams()

    const [categories,setCategies]=useState([])
    
   
    // Function get Category from API
    async function getCategory(){
        try {
          // const response = await axios.request(`https://fakestoreapi.com/products/category/${category}`);
          const response = await axios.request(`https://dummyjson.com/products/category/${category}`);
          setCategies(response.data.products);
          console.log("response.dat and id");
          console.log( response.data.products[1].price);



        } catch (error) {
          console.error(error);
        }
    }
    
    // Use EFFECT
    useEffect(()=>{
        getCategory() ;
    },[])
  

  return (
<>         
  <h2 className={`${style.title} container-fluid mt-5`}>{category? category :""}</h2>

   <div className={`${style.prodcuts} container-fluid mt-4`} >

   {/* sid */}
    <div className={`${style.sid} `}>
    <ul className="list-group">
  <li className="list-group-item">Pichup & Shipping <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Brand <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Size <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Feature <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Price <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Color <i className="fa-solid fa-plus"></i></li>
  <li className="list-group-item">Customer Rating <i className="fa-solid fa-plus"></i></li>
</ul>    
</div>
   {/* center */}
   <div className={`${style.center} row `}>

      {categories.map((category)=>{
        return (
                  <div className={`${style.fdiv} col-md-3 mb-5 ms-5`}>
                    <div className=''>
                      <Link  className='card-body' to={`/products/category/${category.id}`}>
                        <img className='card-img-top' src={category.thumbnail} alt={category.title} />
                        <h1>${(category.price *category.discountPercentage / 100).toFixed(2) } - ${((category.price.toFixed(2) * 2) *category.discountPercentage.toFixed(2) / 100).toFixed(2)} <span>sale</span></h1>
                        <h3>${category.price} - ${(category.price * 2).toFixed(2)} <span>Reg</span></h3>
                        <h5 className='card-title'>{category.title}</h5>
                        <h6><span>Brand</span> :{category.brand}</h6>
                        <h6>
                        <span>Rating</span> : {category.rating}
                          <span>
                            <ReactStars {...firstExample } classNames={`${style.firstE}`} />
                            </span>
                         </h6>
                        {/* <p className='card-text'>
                          {category.description}
                        </p> */}
                        <div className={`${style.colors} my-3`}>
                          <span className='me-3'></span>                          
                          <span className='me-3'></span>
                          <span className='me-3'></span>                          
                          <span className='me-3'></span>
                          <span className='me-3'>+</span>

                        </div>

                        <Link to={`/products/category/${category.id}`}>
                          <button className={`${style.button}`}>View Details</button>
                      </Link>
                      </Link>
                    </div>
                  </div>
                )
        
      })}
      <br></br>
  </div>
   </div>
  </>
  )
}
