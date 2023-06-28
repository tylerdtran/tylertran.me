
import React from 'react';
import './Footer.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer(){
    return (
        <div className="footer text-center">
            <div>This website was built by Tyler Tran. 
               I built this website using React, TypeScript, and Sass. I used Tailwind CSS and MaterialUI for styling. 
                I used React Router for routing. I used React reveal for transitions and animations. 
            </div>   
            <CopyrightIcon /> Tyler Tran
        </div>
    );
}