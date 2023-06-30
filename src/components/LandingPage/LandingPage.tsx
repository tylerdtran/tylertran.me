import React from 'react';
import './LandingPage.scss';
import { Fade } from "react-awesome-reveal";



export default function LandingPage(){

    return (
        <div className="landing-section-container h-screen flex flex-col items-center justify-center">
            <div id="Home" className="landing-inner-container " > 
                    <Fade direction="up"triggerOnce={true} duration={1500}>
                        <h1 className='Landing-Name text-white'>Tyler Tran</h1>
                    </Fade>
                    <Fade direction="up" triggerOnce={true} delay={500} duration={1500}>
                        <h2 className='Landing-Position '>Software Engineer</h2>
                    </Fade>
            </div> 
        </div>

    );
}
