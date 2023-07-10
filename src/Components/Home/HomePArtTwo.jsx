import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios';
import Slider from "react-slick";



export default function HomePartTwo() {

  const [categories,setCategies]=useState([])
  const nbr = 8;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay : true,
  };

  // const options = {
  //   method: 'GET',
  //   url: 'https://kohls.p.rapidapi.com/categories/list',
  //   headers: {
  //     'X-RapidAPI-Key': '4779e8ecd9mshe1ef9f9f64eee3cp1b926fjsna0085423d1aa',
  //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
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
    <>
    <Slider {...settings} className={`${style.sliders} container `}>
      {categories.map((category)=>{
        return(
           <div className={`${style.slider}`}>
            <p><a href="#/">{category.split(" ").slice(0,1).join(" ")}
              </a> </p>
          </div>
        )
      })}
    
    </Slider>

    </>



  )
}
