import React, { Component } from 'react'
import './Bookplumber.css'
import lockIcon from '../images/lock.png'

export default class Bookplumber extends Component {
  render() {
    return (
      <div>
        <div className="booking-container">
            <div className="booking-form-container">
                <div className="booking__title">Book a <span>plumber</span> near you</div>

                <div className="booking__form">

                <form className="booking-form">
              <div className="form-booking-row">
                <input className="form-booking-input" type="text" placeholder="Full Name*" />
                <input className="form-booking-input" type="text" placeholder="Phone Number*" />
                <input className="form-booking-input" type="email" placeholder="Email Address*" />
              </div>
              <div className="form-booking-row">
                <input className="form-booking-input" type="text" placeholder="Suburb" />
                <input className="form-booking-input" type="text" placeholder="Service type" />
                <input className="form-booking-input" type="text" placeholder="Date & Time" />
              </div>
              <div className="form-booking-row">
                <textarea className="form-booking-input form-booking-textarea" placeholder="Additional Information"></textarea>
                <button className="form-booking-button" type="submit">Get a free quote</button>
              </div>
            </form>

                </div>

                    
                <div className="booking__footer">
                    <div className="booking__footer-element">
                        <img className='lock__icon'src={lockIcon} alt="" />
                        <p className="booking_-footer-text">Your information is 100% safe and secure</p>
                    </div>
                    <div className="booking__footer-element">
                        <img className='lock__icon'src={lockIcon} alt="" />
                        <p className="booking_-footer-text">You will recieve a response within minutues</p>
                    </div>
                </div>
            </div>
            {/* <div className="booking-container__box"> */}
                <div className="booking-box">Map</div>
            {/* </div> */}
        </div>
      </div>
    )
  }
}
