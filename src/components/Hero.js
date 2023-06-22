import React from 'react';
import '../styles/Hero.css';
import {
image1,
image2,
image3,
image4,
image5,
image6,
image7,
image8,
image9,
} from '../assets/images';

const Hero = () => {
  return (
      <section className='hero'>
          <div className='hero-con'>
              <div className='hero-flex'>
                  <div className='hero-image'>
                      <img src={image8} alt='ai-robot'/>
                  </div>
                  <div className='hero-content'>
                      <h1>Make Every Activities More Worthy!</h1>
                      <p>Introducing Oqaske AI, a conversational model trained to engage
                          in dynamic dialogue. With its interactive format, Oqaske AI is equipped
                          to provide answers, acknowledge errors,
                          question flawed assumptions, and decline inappropriate requests.</p>
                        <div className='hero-btns'>
                            <button className='try-btn hero-btn'>Try Oqaske</button>
                            <button className='dev-btn hero-btn'>Developer</button>
                        </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Hero