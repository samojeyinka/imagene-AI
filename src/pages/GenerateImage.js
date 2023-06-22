import React from 'react';
import '../styles/Modal.css';
import {FaTimes} from 'react-icons/fa';
import Header from '../components/Header';
import { Configuration, OpenAIApi } from 'openai';


const GenerateImage = ({close}) => {
     console.log(process.env.REACT_APP_Open_AI_key);
     
     const configuration = new Configuration({
       apiKey: process.env.REACT_APP_OPEN_AI_KEY,
     });

    
      

  return (
    <section className='modal generate'>
        <div className='modal-con'>
        <h1>GenerateImage</h1>
        <i className='close-icon'>
        <FaTimes onClick={close}/>
        </i>
    </div>
    </section>
  )
}

export default GenerateImage