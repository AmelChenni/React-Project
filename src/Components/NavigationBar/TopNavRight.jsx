import React from 'react'
import style from './NavigationBar.module.css'


export default function TopNavRight() {
  return (
      <div className={`${style.TopNavRight} me-5`}>
        <div className="item px-3">
            <i className="fa-regular fa-credit-card"></i>
            <span>Kohl's Card</span>
        </div>
        <div className="item px-3">
            <i className="fa-solid fa-dollar-sign"></i>
            <span>Kohl's Coupons</span>
        </div>
        <div className="item px-3">
            <i className="fa-solid fa-question"></i>  
            <span>Kohl's Helps</span>
        </div>
      </div>
  )
}
