import React, { Component } from 'react'
import './Header.css'
import headerLogo from '../images/Asset 23.png'

export default class Header extends Component {

  render() {
    return (
      <div>
        <nav className='nav'>
            <a className='logo-container' href="#0"><img src={headerLogo} alt="" /></a>
            {/* including 3 other parts of the nav */}
            <div className='navs-container'>
            <ul className="nav-links">
              <li><a className='nav-link' href="#home">Home</a></li>
              <li><a className='nav-link' href="#services">Services</a></li>
              <li><a className='nav-link' href="#faq">About</a></li>
              <li><a className='nav-link' href="#contact">FAQ</a></li>
            </ul>
            <ul className="nav-availables">
                <li className="nav-available__line"></li>
                <li><a className='nav-available nav-available-1' href="#home">We're available</a></li>
                <li className='nav-circle'></li>
                <li><div className='nav-available nav-available-2'>11:12am</div></li>
                <li className="nav-available__line"></li>
            </ul>
            <div className="nav-buttons">
                <a href="#0" className="btn nav__button nav__button--active"><span>Get a free quote</span></a>
                <a href="#0" className="btn nav__button">1300 00 000</a>
            </div>
            </div>
      </nav>
      </div>
    )
  }
}
