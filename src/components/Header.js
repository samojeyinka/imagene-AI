import React,{useState,useRef} from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import GenerateImage from '../pages/GenerateImage';
import '../styles/Modal.css'

const Header = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
    }

    const close = ()=> {
        setOpenModal(!openModal)
    }
    
  return (
    <header>
            <div className='intro'>
                <h1>Oqaske AI</h1>
                
            </div>

        <nav>
            <ul>
                <div className='links-left'>
                <li>
                    <Link to='/'>FAQs</Link>
                </li>
                <li>
                    <Link to='/'>Ask question</Link>
                </li>
                <li>
                    <Link to='/' onClick={handleModal}>Generate images</Link>
                </li>
                <li>
                    <Link to='/'>Grammer correction</Link>
                </li>
                
                </div>
                <div className='links-right'>
                <li>
                <Link to='/'>Convert codes</Link>
                </li>
                <li>
                    <Link to='/'>Explain codes</Link>
                </li>
                <li>
                    <Link to='/'>Summarize</Link>
                </li>
                <li>
                    <Link to='/'>Translation</Link>
                </li>
                <li>
                    <Link to='/'>Movie to emoji</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                </div>
                
              
            </ul>
        </nav>


        {/* =====================The modals starts =============== */}

        <div className={`modal ${openModal ? 'modal': 'modal close'}`}>
            <GenerateImage close={close}/>
        </div>

        {/* =====================The modals starts =============== */}
    </header>
  )
}

export default Header