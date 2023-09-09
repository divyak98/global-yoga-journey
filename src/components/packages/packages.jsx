import React, {useEffect, useState} from 'react'
import './pacakages.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {AiFillStar} from 'react-icons/ai'
import {LiaStarHalfSolid} from 'react-icons/lia'
import StripeCheckout from 'react-stripe-checkout'
const Packages = () => {
  useEffect(()=>{
    Aos.init({duration:500})
},[])

//product object
const [product]=useState({
  name:"Sample User",
  price:200,
  description:"This is sample user"
})
  return (
    <div className='packages section'>
      <div className='secContainer'>
        <span data-aos='fade-up' data-aos-duration='500' className='secTitle'>
        ENGAGING AND CONVENIENT ONLINE YOGA CLASSES
        </span>
       
      <div data-aos='fade-up' data-aos-duration='500' className='packageContainer'>
        <div className='single grid'>
          <div className="package-info">
            <span className='packageTitle'>Basic</span>
       
            <div className='stars-Review'>
            <div className='stars'>
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <LiaStarHalfSolid className='icon'/>
            </div> 
            <small className='custReview'> 114 Customer Reviews</small>
            </div>
            <p>
              <ul>
              <li>1.Access 500+ yoga, meditation and movement classes from our extensive library.</li> 
              <li>2.Access 1st two classes released by new teachers to DYWM.</li>
              </ul>
            </p>
            <button className='btn'> Apply Now</button>
            
          <span className='price'>FREE</span>
          </div>
        </div>
        <div className='single grid'>
            <div className='package-info'>
            <span className='packageTitle'>Monthly</span>
           <div className='stars-Review'>
            <div className='stars'>
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
            </div> 
            <small className='custReview'> 43 Customer Reviews</small>
            </div>
            <p>
              <ul>
                <li>1.Access 1000s of AD-FREE yoga, meditation and movement classes</li>
                <li>2.Exclusive access to all new releases and premium content</li>
                <li>3.Access our complete collection of curated programs & challenges</li>
                <li>4.Follow your favorite teachers</li>
              </ul>
            </p>
            <button className='btn'> Apply Now  <StripeCheckout 
                stripeKey='pk_test_51NoUsbSEEht4zCIaq6cJdTFVIcUssP9SOhwrcSWP2XDAMkDJZn2wlT4PkB7bsS2rvHyxOjo1kTDOxy6YGShEkoAj009n0BnXoq'
            /></button>
            
          <span className='price'>$13.99 / Month</span>
          </div>
        </div>
        <div className='single grid'>
            <div className='package-info'>
              <span className='packageTitle'>Annually</span>
           <div className='stars-Review'>
            <div className='stars'>
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <AiFillStar className='icon'/> 
              <LiaStarHalfSolid className='icon'/>
            </div> 
            <small className='custReview'> 28 Customer Reviews</small>
            </div>
            <p>
              <ul>
              <li>1.Access 1000s of AD-FREE yoga, meditation and movement classes</li>
              <li>2.Exclusive access to all new releases and premium content</li>
              <li>3.Access our complete collection of curated programs & challenges</li>
              <li>4.25% off livestream events</li>
              <li>5.Curate your own collection of favorite classes</li>
              <li>6.Follow your favorite teachers</li>
              <li>7.Access to our Mobile and TV app</li>
              </ul>
            </p>
            <button className='btn'> Apply Now   <StripeCheckout 
                stripeKey='pk_test_51NoUsbSEEht4zCIaq6cJdTFVIcUssP9SOhwrcSWP2XDAMkDJZn2wlT4PkB7bsS2rvHyxOjo1kTDOxy6YGShEkoAj009n0BnXoq'
               
            /> </button>
            
          <span className='price'>$108.99 / Year </span>
          </div>
        </div>
      </div>
      </div>
    </div> 
       
     
    
  )
}

export default Packages
