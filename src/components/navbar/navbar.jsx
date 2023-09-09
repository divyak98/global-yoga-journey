import React,{useState} from 'react'
import './navbar.css'
//imported icons
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {TbGridDots} from 'react-icons/tb'
const Navbar = () => {
 
  //Navbar Display
  const [active, setActive]=useState('menuDiv')
  const showNavBar =()=>{
    setActive('menuDiv activeNavBar')
  }
  //Navbar Remove
  const removeNavBar =()=>{
    setActive('menuDiv ')
  }


  return (
    <div>
      <div className='header flex'>
        <div className='logoDiv'>
          <h3 className='logo'>Global Yoga Journeys</h3>
        </div>
        <div className={active}>
          <ul className='menuLists'>
            <li className='navItems' >
              <a href="#" className='menuLink' onClick={removeNavBar}>Home</a>
            </li>
            <li className='navItems'>
              <a href="#" className='menuLink' onClick={removeNavBar}>About</a>
            </li>
            <li className='navItems'>
              <a href="" className='menuLink' onClick={removeNavBar}>Blog</a>
            </li>
            <li className='navItems'>
              <a href="" className='menuLink' onClick={removeNavBar}>Personal Coach</a>
            </li>
            <li className='navItems'>
              <a href="#" className='menuLink' onClick={removeNavBar}>Contact Us</a>
            </li>
          </ul>
          <div onClick={removeNavBar} className='closeNavBar'>
          <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div className='socialIcons flex'>
          <BsFacebook className='icon'/>
          <AiFillTwitterCircle className='icon'/>
          <BsYoutube className='icon'/>
          <BsInstagram className='icon'/>
        </div>
        <div onClick={showNavBar} className='toggleNavBar'>
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
