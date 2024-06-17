import React, { Component } from 'react'
import './Repairbanner.css'
import paymentImg from '../../images/payment-card.png'
import rapiraLogo from '../../images/Asset 24.png'

export default class Repairbanner extends Component {
  render() {
    return (
        <div className="repair-banner-main">
        <div className='repairbanner-container'>
           <div className="repair-box">
            {/* <div className="repair-logo-container"><span className='repair-logo'>LOGO</span></div> */}
            <div className="repair-logo-icon"><img className="logo-image-repair" src={rapiraLogo} alt="" /></div>
            <div className="repair-text">
                <div className="repair-text__title">Ask about our payment plans</div>
                <div className="repair-text-desc">Repair now, Pay Later</div>
                <div className="repair-text-buttons">
                    <a href="#0" className="repair-text-button btn">1300 000 000</a>
                    <a href="#0" className="repair-text-button repair-text-button--snow btn" >Get a free quote</a>
                </div>
            </div>
            <div className="repair-img">
                <img src={paymentImg} alt="" />
            </div>
        </div>
        {/* lower section */}
        <div className="repairbanner_lower">
            <div className="inner-box">
                <div className="do__digit">01</div>
                <div className="do__text">
                    <p className='do__text-title'>Do it now</p>
                    <p className='do__text-desc'>Big jobs or little jobs, repaired today.</p>
                </div>
            </div>
            <div className="inner-box">
            <div className="do__digit">02</div>
                <div className="do__text">
                    <p className='do__text-title'>Pay later</p>
                    <p className='do__text-desc'>Pay it off in small, affordable installments.</p>
                </div>
            </div>
            <div className="inner-box">
            <div className="do__digit">03</div>
                <div className="do__text">
                    <p className='do__text-title'>No interest ever</p>
                    <p className='do__text-desc'>Talk to us to find out more.</p>
                </div>
            </div>
        </div>
      </div>
        </div>
      
    )
  }
}
