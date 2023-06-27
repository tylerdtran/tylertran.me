import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../exports';

export default function Layout() {
    return (
        <div className="components">
          <Navbar />

          <div className="main-sections" ></div>

 
        </div>
      )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
  }
