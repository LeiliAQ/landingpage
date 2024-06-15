import React, { Component } from 'react'
import './Landing.css'
import starIcon from '../images/starpng.png'


export default class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <div class="second-image-overlay"></div>
         <h1 className='landing-title'>
            YOUR LOCAL <span className="second-line">HOT WATER</span> EXPERTS
          </h1>
         <div className="header_pricing">
            <div className="pricing__elements">
              <div className='pricing__element'>
                <div className='icon-image'><img src="" alt="" className="pricing__image" /></div>
                <div className="pspan-container">
                  <p>Upfront pricing</p>
                  <span>Know the price of the job before we start.</span>
                </div>
                
              </div>

              <div className='pricing__element'>
                <div className='icon-image'><img src="" alt="" className="pricing__image" /></div>
                <div className="pspan-container">
                  <p>$0 Call out</p>
                  <span>No call out fees</span>
                </div>
              </div>

              <div className='pricing__element'>
                <div className='icon-image'><img src="" alt="" className="pricing__image" /></div>
                <div className="pspan-container">
                  <p>$50 off for online bookings</p>
                  <span>Book online to receive a discount</span>
                </div>

              </div>

            </div>
            <div className="flex-right">
                <div className="header-down-elements">
                  <div className="header-down-element blue">

                      <div className='header-down-title-container'>
                      <p className='header-down__title'>4.9</p>
                      <div className='header-image'>
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                      </div>
                      <p className='header-down__rating'>Amazign Rating</p>
                      <p className='header-down__social'>Facebook</p>
                      </div>

                  </div>
                  <div className="header-down-element red">
                      
                      <div className='header-down-title-container'>
                      <p className='header-down__title'>5.0</p>
                      <div className='header-image'>
                      <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                        <img className='star'src={starIcon} alt="" />
                      </div>
                      <p className='header-down__rating'>Amazign Rating</p>
                      <p className='header-down__social'>Google</p>
                      </div>

                  </div>
                  <div className="header-down-element yellow">

                      <div className='header-down-title-container'>
                      <p className='header-down__title'>24h</p>
                      <p className="emergency">Emergency Services</p>
                      </div>

                      
                  </div>
                </div>
            </div>
            
           
          


         </div>
      </div>
    )
  }
}
