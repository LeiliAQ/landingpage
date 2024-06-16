import React, { Component } from 'react'
import './Footer.css'
import mediacoIcon from '../images/Asset 27.png'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer-section'>
        <div className="footer-section__upper">
            <div className="footer-item-logo"><span>LOGO</span></div>
            <div className="footer-item">
                <p className="footer-item-title">Services</p>
                <div className="footer-list-item--line"></div>
                <ul className='footer-list'>
                    <li className='footer-list-item'><a href="#0">Blocked Drains</a></li>
                    <li className='footer-list-item'><a href="#0">Hot Water</a></li>
                    <li className='footer-list-item'><a href="#0">Repairs & Maintenance</a></li>
                    <li className='footer-list-item'><a href="#0">View All Services</a></li>
                </ul>
            </div>
            <div className="footer-item">
                <p className="footer-item-title">Quick links</p>
                <div className="footer-list-item--line"></div>
                <ul className='footer-list'>
                    <li className='footer-list-item'><a href="#0">Services</a></li>
                    <li className='footer-list-item'><a href="#0">About us</a></li>
                    <li className='footer-list-item'><a href="#0">FAQ</a></li>
                </ul></div>

            <div className="footer-item"><p className="footer-item-title">Contsct Us</p>
            <div className="footer-list-item--line"></div>
                <ul className='footer-list'>
                    <li className='footer-list-item'><a href="#0">P: 1300 000 000</a></li>
                    <li className='footer-list-item'><a href="#0">E: info@plumber.com.au</a></li>
                    <li>
                        <div className="footer-button-container">
                            <a href="#0" className="footer-items-btn"><span>Get a free quote</span></a>
                        </div>
                    </li>
                </ul></div>
        </div>
        {/* footer lower part */}
        <div className="footer-line-through"></div>
        <div className="footer-section__lower">
            <div className="footer-copyright">© 2023 . All rights reserved. Here’s our Terms and Conditions and Privacy Policy.</div>
            <div className="mediaco">
                <div className='mediaco-services'>Services by</div> 
                <img src={mediacoIcon} alt="" /></div>
        </div>
      </div>
    )
  }
}
