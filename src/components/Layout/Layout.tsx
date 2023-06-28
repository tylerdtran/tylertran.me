import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../exports';
// import { LandingPage, About, Experience, Footer } from '../../components/exports';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="components">
          <Navbar /> {/* <--- This is the only component that is not a section */}
          <div className="main-sections" >{children}</div>

 
        </div>
      )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
