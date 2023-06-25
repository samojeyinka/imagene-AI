import React,{useState,useRef} from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import GenerateImage from '../pages/GenerateImage';
import '../styles/Modal.css'
import About from '../pages/About';
import Developer from '../pages/Developer';

const Header = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModalAbout, setOpenModalAbout] = useState(false);
    const [openModalDev, setOpenModalDev] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
    }

    const handleModalAbout = () => {
        setOpenModalAbout(!openModalAbout);
    }

    const handleModalDev = () => {
        setOpenModalDev(!openModalDev);
    }
    const close = ()=> {
        setOpenModal(!openModal)
    }
    
    const closeAbout = ()=> {
        setOpenModalAbout(!openModalAbout)
    }

    const closeDev = ()=> {
        setOpenModalDev(!openModalDev)
    }

  return (
    <header>
            <div className='intro'>
                <h1>Imagene AI</h1>
                
            </div>

        <nav>
            <ul>
                <div className='links-left'>
                <li>
                    <Link to='https://github.com/samojeyinka?tab=repositories' target='_blank'>GitHub</Link>
                </li>
               
                <li>
                    <Link to='/' onClick={handleModal}>Image generator</Link>
                </li>
                
                
                </div>
                <div className='links-right'>
                <li>
                    <Link to='/' onClick={handleModalAbout}>About</Link>
                </li>
                <li>
                    <Link to='/' onClick={handleModalDev}>Developer</Link>
                </li>
                </div>
                
              
            </ul>
        </nav>


        {/* =====================The modals starts =============== */}

        <div className={`modal ${openModal ? 'modal': 'modal close'}`}>
            <GenerateImage close={close}/>
        </div>

        <div className={`modal ${openModalAbout ? 'modal': 'modal close'}`}>
            <About close={closeAbout}/>
        </div>

        <div className={`modal ${openModalDev ? 'modal': 'modal close'}`}>
            <Developer close={closeDev}/>
        </div>

        {/* =====================The modals starts =============== */}
    </header>
  )
}

export default Header