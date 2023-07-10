import React, { useEffect, useState } from 'react'
import style from './ChoosToY.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ChooseToy() 
{
    const [products,setProducts]=useState([])
    
      // Function get Category from API
      async function getProducts(){
          try {
            const response = await axios.request(`https://dummyjson.com/products`);
            console.log("response.data.payload.products details");
            setProducts(response.data.products);
            console.log(response.data.products);

          } catch (error) {
            console.error(error);
          }
      }
      
      // Use EFFECT
      useEffect(()=>{
          getProducts() ;
      },[])
    
  return (
    <div className={`${style.ChooseToY} m-auto`}>
      <h1>Here are more great finds you’ll love.</h1>
      {/*  */}
      <div className={`${style.center} row `}>

      {products.map((category)=>{
        return (
                  <div className={`${style.fdiv} col-md-4 `}>
                    <div className={style.imgCard}>
                      <Link  className='card-body' to={`/products/category/${category.id}`}>
                        <img className='card-img-top' src={category.thumbnail} alt={category.title} />
                        <span>{category.category}</span>
                        {/* <h1>${(category.price *category.discountPercentage / 100).toFixed(2) } - ${((category.price.toFixed(2) * 2) *category.discountPercentage.toFixed(2) / 100).toFixed(2)} <span>sale</span></h1>
                        <h3>${category.price} - ${(category.price * 2).toFixed(2)} <span>Reg</span></h3> */}
                        <h5 className='card-title'>{category.title}</h5>
                        <h6><p className={`${style.pspan}`}>Brand</p> :{category.brand}</h6>
                        <h6>
                        <p className={`${style.pspan}`}>Rating</p> : {category.rating}
                          {/* <span>
                            <ReactStars {...firstExample } classNames={`${style.firstE}`} />
                            </span> */}
                         </h6>
                        {/* <p className='card-text'>
                          {category.description}
                        </p> */}
                        {/* <div className={`${style.colors} my-3`}>
                          <span className='me-3'></span>                          
                          <span className='me-3'></span>
                          <span className='me-3'></span>                          
                          <span className='me-3'></span>
                          <span className='me-3'>+</span>

                        </div> */}

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
      {/*  */}
    </div>
  )
}
