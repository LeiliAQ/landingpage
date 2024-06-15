import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div className="logo-container">
              <div className="logo-top">LOGO</div>
          </div>
            
            {/* including 3 other parts of the nav */}
            <div className='navs-container'>
            <ul className="nav-links">
              <li><a className='nav-link' href="#home">Home</a></li>
              <li><a className='nav-link' href="#services">Services</a></li>
              <li><a className='nav-link' href="#faq">About</a></li>
              <li><a className='nav-link' href="#contact">FAQ</a></li>
            </ul>
            <ul className="nav-availables">
                <li className="nav-available__line">/</li>
                <li><a className='nav-available' href="#home">We're available</a></li>
                <li className='nav-circle'><a className='nav-available' href="#services"></a></li>
                <li><a className='nav-available' href="#services">11:12</a></li>
                <li className="nav-available__line">/</li>
            
            </ul>
            <div className="nav-buttons">
                <a href="#0" className="btn nav__button btn nav__button--active">Get a free quote</a>
                <a href="#0" className="btn nav__button">1300 00 000</a>
            </div>
            </div>


      </nav>
      </div>
    )
  }
}
