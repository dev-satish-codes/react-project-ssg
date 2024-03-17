import React, {useState} from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Collections from '../components/collections'
import Footer from '../components/footer'
import WomenCollection from '../components/womenCollection'
import {Gents, Women} from '../data'
// import {Women} from '../data'
const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents)
  const [womensFashion, setWomensFashion] = useState(Women)



  // console.log(Gents)
  // console.log(Women)

  return (
    <div>
      <Header/>
      <Banner />
      <Collections gentsFashion = {gentsFashion}/>
      <WomenCollection womensFashion = {womensFashion}/>
      <Footer />
    
    </div>
  )
}

export default MainPage
