import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png'
import profileimg from '../asset/avatar.png'
import { MdShoppingBasket } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import '../styles/navfooter.scss'
import '../index.css'
const Header = () => {

  const [menuOpen, menuClose] = useState("false")
 const toggleMenu = () => {
      menuClose(!menuOpen)
 }
  return (
    <div className='header'>
      <div className="logo">
        <img width={35} src={logo} alt="logo" />
        <h1>ChefDee</h1>
      </div>
      <div className="menu">
      <ul className={menuOpen ? 'menu_item' : 'show'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/">About Us</Link></li>
        <li><Link to="/">Service</Link></li>
      </ul>
      <div className="menu_close">
        <h3 onClick={toggleMenu}>
         {
          menuOpen ?
          <FiMenu />
          :
          <IoMdClose />
         }
        </h3>
      </div>
      <ul className='menu_icons '>
      <li className='cart'>
        <MdShoppingBasket />
        <span className='addToCart' id="addToCart">4</span>
      </li>
        <li className='profile'>
          <motion.img whileHover={{scale : 0.8}}
           width={35} height={35} src={profileimg} alt="profile" />
          <div className="sub_profile">
            <p><Link to="/">View Profile</Link></p>
            <p><Link to="/">View Profile</Link></p>
            <button><Link to="/">SignUp</Link></button>
            <button><Link to="/">SignIn</Link></button>
            <button><Link to="/">SignOut</Link></button>
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Header
