
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'
import { useState } from 'react'
const App = () => {
  const [playState,setPlayState] = useState(false);
  return (
    <div>
     <Navbar/>
     <Hero/>
    <div className='container'>
      <Title subTitle='our PROGRAM' title='What We Offer'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus/>
    <Title subTitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonials/>
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
    <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
