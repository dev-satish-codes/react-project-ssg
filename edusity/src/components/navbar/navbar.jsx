import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky,setsticky] = useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setsticky(true):setsticky(false);
      })
    },[]);
    const [mobilemenu,setmobilemenu] = useState(false);
   const togglemenu = ()=>{
    mobilemenu? setmobilemenu(false): setmobilemenu(true)
    }

  return (
    <nav className={`container ${sticky? 'dark_nav':''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul className={mobilemenu?'':'hide_mobile_menu'}>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-170} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-220} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu_icon' onClick={togglemenu} />
    </nav>
  )
}

export default Navbar
