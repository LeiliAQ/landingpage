import React, { Component } from 'react'
import './Quote.css'
import phoneImage from '../images/phone-hand.png'
import lockPng from '../images/lock.png'

export default class Quote extends Component {
  render() {
    return (
      <div>
         <div className="quote-container">
            <div className="quote_description">
                <div className="disc">
                    <p className='disc-title'>Request a <span className='fast-span'>fast <br /></span> quote today</p>
                    <p className="disc-text">
                            We are industry leaders providing quality plumbing, drainage, hot water,
                            and roofing-related services to our Community of Customers. We’re ready
                            to assist you with all your needs. From routine maintenance to emergency
                            repairs and quality installations, we have you covered.
                    </p>
                </div>
                <div className="quote-image-conntainer">
                    <div className="no-fee-outer">
                        <div className="no-fee-inner">
                            <div>$0</div>
                             No Call <br /> Out Fees <sup>*</sup>
                        </div>
                    </div>
                    <img  className='quote-img' src={phoneImage} alt="" />
                </div>
            </div>
            {/* form section */}
            <div className="quote-form-container">
                <div className="form-header">
                    <div className="describe">Describe your <span>plumbing</span> requirement to get a quote</div>
                    <div className="header-rest">
                        <div className="icon-container">
                            <img src={lockPng} alt="" />
                            <span>Your information is 100% safe and secure</span>
                        </div>
                        <div className="icon-container">
                            <img src={lockPng} alt="" />
                            <span>
                            You will recieve a response within minutues</span>
                        </div>
                        
                    </div>
                </div>
                <div className="form-container">
                   
                   <form action="" className="form">
                        <div className="grid-container">
                            <input className='form-input' type="text" name="" id="" placeholder='Name' />
                            <input className='form-input' type="text" name="" id="" placeholder='Phone Number' />
                            <input className='form-input' type="text" name="" id="" placeholder='Email Address' />
                            <input className='form-input' type="text" name="" id="" placeholder='Suburb' />
                            <input className='form-input' type="text" name="" id="" placeholder='Service Type' />
                            <input className='form-input long-input' type="text" name="" id="" placeholder='Describe your plumbing job' />
                            <button type="submit" className="submit-button">Get a free quote</button>
                        </div>
                    </form>


                </div>
            </div>
            {/* book online */}
            <div className="book-online">
                <div className="off">
                    <div><sup className='dollar-sign'>$</sup><span className='book-online-number'>50</span></div>
                    
                    <div className="rorated-off">OFF</div>
                </div>
                <span>When you <br /> book online</span>
            </div>
         </div>
      </div>
    )
  }
}
