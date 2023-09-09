import React,{useEffect} from 'react';
import './staff.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Hatha from '../Assets/Hatha.jpg'
import Kundalini from '../Assets/Kundalini.jpg'
import Ashtanga from '../Assets/Ashtanga.jpg'
import Vinyasa from '../Assets/Vinyasa.jpg'
import {AiOutlineArrowRight}  from 'react-icons/ai'
const Staff = () => {
  useEffect(()=>{
    Aos.init({duration:500})
},[])

  return (
    <div className='staff'>
      <div data-aos='fade-up' data-aos-duration='500'  className='staffContainer container grid'>

        <div  className='singleCard'>
          <div className='imgDiv'>
            <img src={Hatha}/>
          </div>
          <h4 className="textDiv">Hatha-Yoga</h4>
        </div>

        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={Ashtanga}/>
          </div>
          <h4 className="textDiv">Ashtanga-Yoga</h4>
        </div>
      
        <div className='singleCard'>
          <div className='imgDiv'>
            <img src={Vinyasa}/>
          </div>
          <h4 className="textDiv">Vinyasa-Yoga</h4>
        </div>

        <div  className='singleCard'>
          <div className='imgDiv'>
            <img src={Kundalini}/>
          </div>
          <h4 className="textDiv">Kundalini-Yoga</h4>
        </div>

      </div>
      <div className='spanText flex'>
     Types of Yoga <AiOutlineArrowRight className='icon'/>
      </div>
    </div>
  )
}
export default Staff
