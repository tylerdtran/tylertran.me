import React from 'react';
import './About.scss';
// import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { Fade, Reveal, Slide } from "react-awesome-reveal";
// import  ProfilePhoto from '../../images/Profile-Photo.jpeg';

export default function About(){

    return (
        <div id="About" className="lg:h-screen flex flex-col justify-center items-center md:h-min ">
           
            <div className="components flex flex-col items-center w-5/6 md:w-3/6 ">
                <Reveal triggerOnce={true}>
                    <div id="about-title-container">
                        <h1 className="text-8xl about-title">About</h1>
                        {/* <div className="word flex flex-row about-title">
                            <span>A</span>
                            <span>b</span>
                            <span>o</span>
                            <span>u</span>
                            <span>t</span>
                        </div> */}
                    </div>
                </Reveal>
                {/* <Reveal triggerOnce={true}>
                    <img src={ProfilePhoto} className="max-w-none"></img>
                </Reveal> */}
                <Slide triggerOnce={true} direction='right'>
                <h2 className="about-name">Hi, my name is Tyler Tran.</h2>   
                </Slide>
                <div className='about-column-1 general-text font-bold text-xl mb-2'>
                    <Fade direction="up" cascade={true} triggerOnce={true} delay={500}>
                    <p className='text-gray-700 '>
                    I'm an aspiring Software Engineer hoping to earn some industry experience in the near future. 
                    Currently, I am an incoming third-year undergraduate student at the <a href="https://www.ucla.edu/">University of California, 
                    Los Angeles </a>pursuing a degree in Computer Science and Linguistics, minoring in Data Science Engineering. 
                    <br />
                    <br />
                    My main interests in the realm of Computer Science and Software Engineering lie in the fields of 
                    Cloud Computing and Database Systems. My hope is to work somewhere in the intersection between 
                    software engineering, cloud computing and database systems.
                    <br />
                    <br />
                    Aside from Computer Science, I love playing tennis, going on spontaneous adventures, cooking Asian 
                    Food at home, and traveling the world.  I am always looking for new opportunities to learn and grow 
                    not just in my technical skills but also as a person. If you would like to get in touch with me,
                    please feel free to reach out to me via email or connect with me on LinkedIn. 
                    </p>
                    </Fade>
                </div>
                <Slide direction="up" triggerOnce={true}>
                <div className='font-bold text-xl mb-2 gap-4 flex space-between'>
                    <button className=" hover:bg-[#0A192F] text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        <a href="mailto:tylerduytran@gmail.com" target='_blank' rel="noreferrer">
                            Contact Me
                        </a>
                    </button>
                    <button className="bg-transparent hover:bg-[#0A192F] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <a href="mailto:tylerduytran@gmail.com" target='_blank' rel="noreferrer">
                            Resume
                        </a>
                    </button>
                </div>
                </Slide>
            </div>
        </div>
    );
}