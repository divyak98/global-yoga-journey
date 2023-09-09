import React,  {useEffect} from 'react'
import './cards.css';

import Aos from 'aos'
import 'aos/dist/aos.css'
import yoga from '../Assets/yoga.jpg';
import package1 from '../Assets/package1.jpg'
import training from '../Assets/training.jpg';
import programs from '../Assets/programs.jpg';
import {AiOutlineArrowRight}  from 'react-icons/ai'
const Cards = () => {
  
  useEffect(()=>{
    Aos.init({duration:500})
},[])

  return (
    <div className='cards'>
      <div data-aos='fade-up' data-aos-duration='1000' className='cardContainer container grid'>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={yoga}/>
          </div>
          <h4 className="textDiv">Increase Flexibility</h4>
        </div>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={training}/>
          </div>
          <h4 className="textDiv">Sharpen Focus</h4>
        </div>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={programs}/>
          </div>
          <h4 className="textDiv"> Build Strength </h4>
        </div>
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={package1}/>
          </div>
          <h4 className="textDiv">Reduce Stress</h4>
        </div>
      </div>
      <div className='spanText flex'>
      Others Benefits of Yoga <AiOutlineArrowRight className='icon'/>
      </div>
    </div>
  )
}

export default Cards
