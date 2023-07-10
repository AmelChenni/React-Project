import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`text-center ${style.footer}`}>
      <div className={`${style.backToTop}`}> back to top</div>
      <div className={`${style.firstSection}`}>
        <div className={`${style.firstSectionOne}`}>
          <i href='*'>Connect with us</i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-pinterest-p"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className={`${style.firstSectionTwo}`}>
        <p>get our app</p>
        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png'/>        
      <div>
          <span>Scan the code to download
              the Kohl’s App today.</span>
              <br></br>
              <button >Lrarn more</button>
        </div>
        </div>

      </div>

      <div className={`${style.scondSection}`}>

<div className={`${style.item}`}>
<ul class="">Costumer service
<li class="">An item</li>
<li class="">A second item</li>
<li class="">A third item</li>
<li class="">A fourth item</li>
<li class="">And a fifth one</li>
</ul>
</div>

<div className={`${style.item}`}>
<ul class="">SHOP KOHL’S
<li class="">An item</li>
<li class="">A second item</li>
<li class="">A third item</li>
<li class="">A fourth item</li>
<li class="">And a fifth one</li>
</ul>
</div>

<div className={`${style.item}`}>
<ul class="">MY ACCOUNT
<li class="">An item</li>
<li class="">A second item</li>
<li class="">A third item</li>
<li class="">A fourth item</li>
<li class="">And a fifth one</li>
</ul>
</div>

<div className={`${style.item}`}>
<ul class="">KOHL’S CARD & REWARDS
<li class="">An item</li>
<li class="">A second item</li>
<li class="">A third item</li>
<li class="">A fourth item</li>
<li class="">And a fifth one</li>
</ul>
</div>

<div className={`${style.item}`}>
<ul class="">ABOUT KOHL’S
<li class="">An item</li>
<li class="">A second item</li>
<li class="">A third item</li>
<li class="">A fourth item</li>
<li class="">And a fifth one</li>
</ul>
</div>


</div>

      <div className={`${style.thirsSection}`}>
        <p>thirsSection</p>
        <p>KOHL’S® and Kohl’s brand names are trademarks owned by KIN, Inc.</p>
        <p>All rights reserved.</p>
        <p>Android, Google Play and the Google Play logo are trademarks of Google Inc. App Store is a service mark of Apple Inc.</p>
      </div>
     

      
    </div>
  )
}
