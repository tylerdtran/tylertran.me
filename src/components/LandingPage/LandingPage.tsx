import React from 'react';
import './LandingPage.scss';
// import { Fade } from "react-awesome-reveal";
// import TextTransition, { presets } from 'react-text-transition';

import  ProfilePhoto  from '../../images/Profile-Photo.jpeg';

export default function LandingPage(){
    return (
      <div className="landing-inner-container flex flex-col items-center justify-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
            {/* <Fade direction="up" triggerOnce={true}> */}
            
                <h1 className='Landing-Name text-white'>Tyler Tran</h1>
            
            {/* </Fade> */}
            {/* <Fade direction="up" triggerOnce={true} delay={500}> */}
                <h2 className='Landing-Position'>Software Engineer</h2>
            {/* </Fade> */}
          <img className='Landing-Image' src={ProfilePhoto} alt='Tyler Tran' />
      </div>
    );
}