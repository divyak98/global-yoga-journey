import React,  {useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(()=>{
      Aos.init({duration:500})
  },[])

  return (
    <div className='home'>
      <div className='homeText'>
        <span data-aos='fade-up' data-aos-duration='500' className= 'spanText'>
          Trust<strong> Our Experience</strong>
        </span> 
        
        <div data-aos='fade-up' data-aos-duration='600' className='homeTitle'>
        <strong> Yoga : </strong> Where Breath Meets Movement
        </div>
        <div data-aos='fade-up' data-aos-duration='700' className='btn'>Reach out to us</div>
        </div>
    </div>
  )
}


export default Home
