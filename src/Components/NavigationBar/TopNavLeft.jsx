import React, { useEffect, useState } from 'react'
import style from './NavigationBar.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function TopNavLeft() {
    const [categories,setCategies]=useState([])

    // const options = {
    //   method: 'GET',
    //   url: 'https://kohls.p.rapidapi.com/categories/list',
    //   headers: {
    //     'X-RapidAPI-Key': '4779e8ecd9mshe1ef9f9f64eee3cp1b926fjsna0085423d1aa',
    //     'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
    //   }
    // };
    
      
    // Function get Category from API
    function refreshPage() {
      window.location.reload();
    }
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
    <div className='mt-4'>
      <div className='topNavLeft'>
     <div className="dropdown">
  <button className={`${style.dropdowntoggle} btn dropdown-toggle `} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="fa-solid fa-bars px-2"></i>
    Shop by Category
  </button>
  <ul className={`${style.dropdownMenu} dropdown-menu`}>
    {categories.map((cat,index)=>{
        return(

          <Link to={`/products/${cat}`} className={`${style.slider} col-3` }  >
 <li className="list-group-item"><a className={`${style.dropdownitem} dropdown-item`} href={cat.seoURL} key={index}>{cat}</a>
            {/* <ul className={`${style.listgroup} list-group bg-succes`}>
            {
                cat.categories.map((subcat)=>{
                    return(
                        <li className="list-group-item">{subcat.name}</li>
                    )
                })
            }
            </ul> */}
            
            </li>         
        </Link> 
             
        )
    })}
  </ul>
</div>


        </div>
    </div>
  )
}
