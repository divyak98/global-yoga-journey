import React,{useEffect} from 'react'
import './review.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import r1 from '../Assets/r1.jpg'
import r2 from '../Assets/r2.jpg'
import r3 from '../Assets/r3.jpg'
const Review = () => {
  useEffect(()=>{
    Aos.init({duration:500})
},[])
  return (
    <div className='review section'>
        <div data-aos='fade-up' data-aos-duration='500'  className="secContainer">
         <span className='secTitle'>
          <strong>What people Say : </strong>
         </span>
         <div className="reviewContainer conatiner grid">
            <div className='singleReview'>
             <div className='imgDiv'>
             <img src={r1} />
             </div>
             <div className="name">
            <strong>Deepika Kumar</strong> 
            </div>
             <p>Attending yoga classes has been an incredibly positive experience for me. The classes offer a welcoming and inclusive atmosphere where I can focus on both physical and mental well-being. I've noticed a significant improvement in my flexibility, strength, and posture since joining. </p>
            </div>
            <div className='singleReview'>
             <div className='imgDiv'>
             <img src={r2} />
             </div>
             <div className="name">
              <strong>Vijay Singh</strong>
            </div>
             <p> Yoga classes have been an unexpectedly fantastic experience for me. Initially, I was unsure, but I've come to appreciate the physical and mental benefits. The classes have helped me increase flexibility, core strength, and balance, which has improved my overall athleticism.  </p>
            </div>
            <div className='singleReview'>
             <div className='imgDiv'>
             <img src={r3} />
             </div>
             <div className="name">
             <strong> Vamika Patel</strong>
            </div>
             <p>They provide a safe space for me to explore my physical and mental capabilities. The instructors are incredibly knowledgeable and patient, guiding me through various poses and breathing techniques. Yoga has not only improved my flexibility and strength but has also been a source of mental clarity and relaxation.</p>
            </div>
         </div>
        </div> 
    </div>
  )
}

export default Review
