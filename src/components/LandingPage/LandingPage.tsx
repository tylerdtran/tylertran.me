import React from 'react';
import './LandingPage.scss';
import { Fade } from "react-awesome-reveal";
// import TextTransition, { presets } from 'react-text-transition';
// import { Parallax } from 'react-parallax';


export default function LandingPage(){

    return (
        // <Parallax className="landing-inner-container flex flex-col items-center justify-center h-screen" bgImage="../../images/lake.jpeg" bgImageAlt="the cat" strength={200}>
            <div  className="landing-inner-container flex flex-col items-center justify-center h-screen" > 
                    <Fade direction="up" triggerOnce={true}>
                        <h1 className='Landing-Name text-white'>Tyler Tran</h1>
                    </Fade>
                    <Fade direction="up" triggerOnce={true} delay={500}>
                        <h2 className='Landing-Position'>Software Engineer</h2>
                    </Fade>
            </div> 
    // </Parallax>
    );
}