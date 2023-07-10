import React from 'react'
import style from './Home.module.css'

export default function HomePartThree() {
  return (
    <div className={`${style.HomePartThree} `}> 
        {/* part one */}

        <div className={`${style.clearance}`}>
        <div>
        <h2>limited time inly !</h2>
        <h3>CLEARANCE</h3>
        <div className={`${style.clrnc}`}>
            <p>take an additional</p>
            <p>50%</p>
        </div>
        <p>  already reduced clearance </p>
        <p> marchandise for <span>up to 85% off.</span> </p>
        <p className={`${style.p}`}>Online price includes applied discount.Discount will be applied automaticlly at the register in store
          <a>details</a>
        </p>
        <a>shop now</a>
        </div>

        <div className={`${style.btn}`}>
            <button className='me-5'><span>$10 </span> & Under</button>
            <button className='me-5'><span>$20 </span> & Under</button>
        </div>
      </div>


        {/* part two */}
            
        <div className={`${style.closeout}`}>
            <h2>closeout</h2>
            <h3>Deals</h3>
            <p>save up to 60% !</p>
            <p>limited time only.</p>
            <p>discountinued styles.limited quantities available.</p>
            <p> In store & online  <a>shop now</a></p>
           
            <div className={`${style.btn}`}>
            <button><span>$10 </span> & Under</button>
            <button><span>$20 </span> & Under</button>
        </div>

      </div>
    </div>
  )
}
