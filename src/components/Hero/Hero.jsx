import React from 'react'
import './Hero.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
const Hero = () => {
  const [Register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(!Register);
    console.log(!Register);
  }

  return (
    <>
    {Register? <SignUp/>:null}
    <div className="hero">
      <div className="sub-hero">
      <div className="hero-txt">
        <div className="lesson-combine">
          <div className="lesson">Lessons ans Insights</div>
          <div className="years">form 8 years</div>
        </div>
        <div className="hero-line">Where to grow your business as a photographer: site or social media?</div>
        <div >
          <NavLink to={'/Register'}><button className="hero-btn" >Register</button></NavLink>
        </div>
      </div>
      <div className="hero-img">
        <img src="./public/icons/hero.png" alt="" />
      </div>
      </div>
      
      <div className="dots">
        <img src="./public/icons/hero-dot.png" alt="" />
      </div>
    </div>
   
    </>
  )
}

export default Hero
