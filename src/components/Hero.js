import React,{useState,useRef} from 'react';
import '../styles/Hero.css';
import GenerateImage from '../pages/GenerateImage';
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

    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
    }
    const close = ()=> {
        setOpenModal(!openModal)
    }

  return (
      <section className='hero'>
          <div className='hero-con'>
              <div className='hero-flex'>
                  <div className='hero-image'>
                      <img src={image8} alt='ai-robot'/>
                  </div>
                  <div className='hero-content'>
                      <h1>Make Every Activities More Worthy!</h1>
                      <p>
                      Introducing Imagene, the ultimate AI image generator.
                       Simply enter your keywords or ideas, and watch as Imagene transforms them into breathtaking visuals. Say hello to customized images that capture the essence of your imagination.
                       Get ready to be amazed by the power of Imagene.
                      </p>
                        <div className='hero-btns'>
                            <button className='try-btn hero-btn' onClick={handleModal}>Try Oqaske</button>
                             <a href='https://www.linkedin.com/in/ojeyinka-samuel-02406125a/' target='_blank' ><button className='dev-btn hero-btn'>Developer</button></a>
                        </div>
                  </div>
              </div>
          </div>

          <div className={`modal ${openModal ? 'modal': 'modal close'}`}>
            <GenerateImage close={close}/>
        </div>
      </section>
  )
}

export default Hero