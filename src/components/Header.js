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
                    <Link to='/'>Q&A</Link>
                </li>
                <li>
                    <Link to='/' onClick={handleModal}>Image generator</Link>
                </li>
                <li>
                    <Link to='/'>Grammar corrector</Link>
                </li>
                
                </div>
                <div className='links-right'>
                <li>
                <Link to='/'>Code converter</Link>
                </li>
                <li>
                    <Link to='/'>Code explainer</Link>
                </li>
                <li>
                    <Link to='/'>Summarizer</Link>
                </li>
                <li>
                    <Link to='/'>Translator</Link>
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