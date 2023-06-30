import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../exports';
import { SocialSideBar } from '../exports';
// import { LandingPage, About, Experience, Footer } from '../../components/exports';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="components bg-[#c6d5c6]" >
          <Navbar /> {/* <--- This is the only component that is not a section */}
          <SocialSideBar />
          <div className="main-sections" >{children}</div>

 
        </div>
      )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
