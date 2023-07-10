import React, { useEffect, useState } from 'react'
import style from './Shop.module.css'
import HomePartTwo from '../Home/HomePArtTwo'
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

export default function Shop() {
 
    const [categories,setCategies]=useState([])
    // const [webID,setWebID]=useState()
  //  const webID= [5674146 , 5485729 , 5702853, 5817195]
    
    // const settings = {
    // //   dots: true,
    // //   infinite: true,
    // //   speed: 500,
    //   slidesToShow: 6,
    // //   slidesToScroll: 3,
    //   rows: 2,

    // //   autoplay : true,
    // };
  
    // const options = {
    //   method: 'GET',
    //   url: 'https://kohls.p.rapidapi.com/categories/list',
    //   headers: {
    //     'X-RapidAPI-Key': '4779e8ecd9mshe1ef9f9f64eee3cp1b926fjsna0085423d1aa',
    //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    //   }
    // };
    // const options = {
    //   method: 'GET',
    //   url: 'https://kohls.p.rapidapi.com/products/list',
    //   params: {
    //     // limit: '24',
    //     // offset: '1',
    //     // dimensionValueID: 'AgeAppropriate:Teens'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '3c6ed0061dmsh1eaefdf2ad4e8c7p1b637ajsnda0626777586',
    //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    //   }
    // };
    // const options = {
    //   method: 'GET',
    //   url: 'https://ali-express1.p.rapidapi.com/categories',
    //   headers: {
    //     'X-RapidAPI-Key': '14c76c3dc7msh83fde3b87d2bc2ap15a579jsn0f9c9a670164',
    //     'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
    //   }
    // };
    
    // Function get Category from API
    async function getCategory(){
        try {
          // const response = await axios.request("https://fakestoreapi.com/products/categories");
          const response = await axios.request('https://dummyjson.com/products/categories');
          setCategies(response.data);
          console.log(response.data);



        } catch (error) {
          console.error(error);
        }
    }
    
    // Use EFFECT
    useEffect(()=>{
        getCategory() ;
    },[])
  
    return (
      <div className={`${style.shop} container-fluid `}>
    <h1>What are you shopping for today?</h1>


     <div className={`${style.sliders} row py-5 my-5`}>
     {categories.slice(0,10).map((category,index)=>{
          return(
              <Link to={`/products/${category}`} className={`${style.slider} col-3 ` }>
                <h3 >{category}</h3>
               
              </Link> 
          )
        })}
     </div>
      </div>
  
  
  
    )
  }
  