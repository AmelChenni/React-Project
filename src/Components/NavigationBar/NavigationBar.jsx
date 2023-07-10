import React from 'react'
import style from './NavigationBar.module.css'
import TopNavLeft from './TopNavLeft';
import TopNavCenter from './TopNavCenter';
import TopNavRight from './TopNavRight';

export default function NavigationBar() {
    // Values
   
  return (
    <div className={`${style.navBar} py-1 border-top border-bottom d-flex`}>
        <div className='d-flex  align-items-center'>
        <TopNavLeft  />
        <TopNavCenter />
        {/* <TopNavRight /> */}
        </div>
      

        <div className='topNavRight'>

        </div>

    </div>
  )
}
