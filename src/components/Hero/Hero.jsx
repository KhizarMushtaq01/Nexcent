import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="sub-hero">
      <div className="hero-txt">
        <div className="lesson-combine">
          <div className="lesson">Lessons ans Insights</div>
          <div className="years">form 8 years</div>
        </div>
        <div className="hero-line">Where to grow your business as a photographer: site or social media?</div>
        <div >
          <button className="hero-btn">Register</button>
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
