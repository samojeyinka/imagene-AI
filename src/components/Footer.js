import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-con'>
                <div className='footer-text'>
                    <h3>Designed & developed by: <span>Sam Ojeyinka</span></h3>
                    <p>Contact me on those social handles</p>
                </div>
                <div className='footer-icons'>
                    <a href="https://github.com/samojeyinka" target='_blank' className='home_social_icon'><FaGithub className='text-white FaFo' /></a>
                    <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank' className='home_social_icon'><FaLinkedin className='text-white FaFo' /></a>
                    <a href="https://wa.me/2348122624063" target='_blank' className='home_social_icon'><FaWhatsapp className='text-white FaFo' /></a>
                    <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='home_social_icon'><FaTwitter className='text-white FaFo' /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer