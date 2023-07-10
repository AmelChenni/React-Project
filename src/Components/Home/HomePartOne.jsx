import React from 'react'
import style from './Home.module.css'


export default function HomePartOne() {
  return (

    <div className={`${style.partOne} container `}>
      <div className={`${style.items}`}>
        <div className={`${style.item}`}>  <div className={`${style.img}`}>
            <a href='d' alt="sld">    
              <img src={require('../../../src/imgs/p1.webp')} alt="*" />
            </a>
        </div>
        </div>

        <div className={`${style.item}`}>  <div className={`${style.img}`}>
            <a href='d' alt="sld">    
              <img src={require('../../../src/imgs/p2.webp')} alt="*" />
            </a>
        </div>
        </div>

        <div className={`${style.item}`}>  
        <div className={`${style.img}`}>
            <a href='d' alt="sld">    
              <img src={require('../../../src/imgs/p3.webp')} alt="*" />
            </a>
        </div>
        {/*  */}
        <div className={`${style.div1}`}>
          <p>9 <span>99</span></p>
          <p> & Under</p>
          <p> +  save with</p>
          <p> coupon*</p>


        </div >
        {/*  */}
        <div className={`${style.div2}`}>
          <p> Tees for the family</p>
          <p>  Select styles. </p>
          <p>  Reg. $9.99-$12.99. </p>
          <p>  Shop Tees </p>
          <p> for the Family </p>


        </div>
        </div>

        <div className={`${style.item} `}>  <div className={`${style.img}`}>
           <h2>TAKE AN EXTRA</h2>
           <p>20%</p>
           <p>OFF</p>
           <div className={`${style.links}`}>
            <a alt="" href='1'  className='ms-3'>Women</a>
            <a alt="" href='1' className='ms-3' >Men</a>
            <a alt="" href='1' className='ms-3' >Girls</a>
            <a alt="" href='1' className='ms-3' >Boys</a>
            <a alt="" href='1' className='ms-3' >Home</a>

           </div>
        </div>
        </div>
      </div>
      <div className={`${style.backToS}`}>
        <h1>New school style. Old school prices. </h1>
        <a href='d' alt="sld">
          <img src={require('../../../src/imgs/p4.webp')} alt="*" />
        </a>
      </div>
      <div className={`${style.backToS2}`}>
        <h1>New school style. Old school prices. </h1>
        <a href='d' alt="sld">
          <img src={require('../../../src/imgs/p5.webp')} alt="*" />
        </a>
      </div>

    </div>
    
  )
}
