import React, { Component } from 'react'
import './Sydney.css'

export default class Sydney extends Component {
  render() {
    return (
      <div className='sydney'>
        <div className="sydney-faqs">
          <div className="faqs__title">Plumber sydney <span>faqs</span>
          </div>
          <div className="faqs__text">We are industry leaders providing quality plumbing, drainage, hot water, and roofing-related services to our Community of Customers. We’re ready to assist you with all your
          needs. From routine maintenance to emergency repairs and quality installations, we have you covered.</div>
          <ul className="faqs__list">
              <li className="faqslist__item">
                <p className="faqitem__text">What types of services do you offer?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
              <li className="faqslist__item">
                <p className="faqitem__text">Do you provide emergency plumbing services?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
              <li className="faqslist__item">
                <p className="faqitem__text">How do I schedule an appointment?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
              <li className="faqslist__item">
                <p className="faqitem__text">How do you charge for your services?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
              <li className="faqslist__item">
                <p className="faqitem__text">What areas do you service?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
              <li className="faqslist__item">
                <p className="faqitem__text">Are you licensed and insured?</p>
                <p className="faqitem__plus"><a href="#0">+</a></p>
              </li>
          </ul>
          <div className="faqs__buttons">
                    <a href="#0" className="faqs-button1 btn"><span>1300 000 000</span></a>
                    <a href="#0" className="faqs-button2 btn"><span>Get a free quote</span></a>

          </div>

        </div>
        
      </div>
    )
  }
}
