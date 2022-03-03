import React from 'react';
import './header.styles.scss';
import YBRSimpleLogo from '../../images/YBRSimpleLogo.png'

import {Navbar, Container} from 'react-bootstrap';


export default function Header() {
  return (
    <div className='header'>
      <img
      alt="ybrb-logo"
      src={YBRSimpleLogo}
      className="logo"
      />
      <h1 className='header-title'>
        YBRB
      </h1>
      <svg className='menu-button' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
      </svg>
  </div>
  )
}
