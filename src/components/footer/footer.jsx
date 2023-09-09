import React, {useEffect} from 'react'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css' 
import {HiPhone} from 'react-icons/hi'
import { AiFillMail } from 'react-icons/ai'
import { TbLocation } from 'react-icons/tb'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:500})
},[])

  return (
    <div className='footer'>
      <div  data-aos='fade-up' data-aos-duration='500'className='secContainer container'>
        <div  className='content grid'>
          <div className='row'>
            <div className='spanText'>
              CONTACT US
            </div>
            <div className='contactDiv'>
              <span className='flex'>
                <HiPhone className='icon'/>
                <span>+246 334 589 89</span>
              </span>
              <span className='flex'>
                <AiFillMail className='icon'/>
                <span>globalyogajourneys@gmail.com</span>
              </span>
              <span className='flex'>
                <TbLocation className='icon'/>
                <span>Delhi,India</span>
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='spanText'>
              POPULAR NEWS
            </div>
            <div className='singleNews'>
              <span className='text'>
              New Study Reveals the Surprising Health Benefits of Daily Yoga Practice.
              </span>
              <p > Aug 04,2023</p>
            </div>
            <div className='singleNews'>
              <span  className='text'>
              Regular practice cultivates mindfulness and fosters a deep connection between mind and body, making it an excellent choice for those seeking a comprehensive approach to health and wellness.
              </span>
              <p > Jun 07,2023</p>
            </div>
            <div className='singleNews'>
              <span className='text'>
              Yoga and Mindfulness Programs Introduced in Schools to Promote Student Well-being.
              </span>
              <p > Feb 21,2023</p>
            </div>
          </div>     
        </div>
        <div className='bottomDiv grid'>
          <p >Copyright 2023 @Global Yoga Journeys - All rights Reserved</p>
        <div className='social flex'>
          <BsFacebook className='icon'/>
          <AiFillTwitterCircle className='icon'/>
          <BsYoutube className='icon'/>
          <BsInstagram className='icon'/>
        </div>
        <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
