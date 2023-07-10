import React from 'react'
import HomePartOne from './HomePartOne'
import style from './Home.module.css'
import HomePArtTwo from './HomePArtTwo'
import HomePartThree from './HomePartThree'
import Shop from '../Shop/Shop'
import ChooseToy from '../ChoosToY/ChooseToy'

export default function Home() {
  return (
    <div className={`${style.home}  mt-5 w-100`}>
      <HomePartOne />
      <HomePArtTwo />
      <HomePartThree />
      <Shop />
      <ChooseToy />


    </div>
  )
}
