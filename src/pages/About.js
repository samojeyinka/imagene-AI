import React from 'react';
import {FaTimes} from 'react-icons/fa';
import '../styles/About.css';

const About = ({close}) => {
    return (
        <section className='modal about'>
            <div className='modal-con about-con'>
                <h1>About <span>Imagene AI</span></h1>
                <i className='close-icon'>
                    <FaTimes onClick={close} />
                </i>

                <div className='about-content'>
                    <p>Welcome to Imagene, your go-to destination for generating stunning images through the power of AI. Developed by Sam Ojeyinka, a talented frontend developer specializing in React JS, Imagene combines cutting-edge technology with artistic vision. With Sam's expertise and passion for delivering top-notch user experiences, Imagene offers a seamless platform where you can bring your ideas to life.

Sam Ojeyinka is a skilled developer with a deep understanding of frontend technologies. His proficiency in React JS ensures that Imagene provides a user-friendly interface, making image generation a breeze. Sam's commitment to excellence and attention to detail is reflected in every aspect of Imagene's design.

To learn more about Sam Ojeyinka and his remarkable journey as a frontend developer, feel free to visit his LinkedIn profile at [LinkedIn - Sam Ojeyinka](https://www.linkedin.com/in/ojeyinka-samuel-02406125a/). There, you can explore his extensive professional background and connect with him directly.

Imagene, powered by Sam Ojeyinka's expertise, promises to revolutionize the way you create and discover quality images. Unleash your creativity and embark on an exciting visual journey with Imagene today!</p>
                </div>
            </div>
        </section>
    )
}

export default About