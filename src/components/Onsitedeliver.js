import React, { Component } from 'react'
import './Onsitedeliver.css'
import deliveryIcon1 from '../images/Asset 21.png'
import deliveryIcon2 from '../images/Asset 22.png'

export default class Onsitedeliver extends Component {
  render() {
    return (
      <div className='quote-deliver-container'>
            {/* free onsite quote  */} 
            <div className="onsite-quote">
                <div className="onsite">Get a free onsite quote</div>
                <div className="onsite-buttons">
                    <a href="#0" className="onsite-button btn"><span>1300 000 000</span></a>
                    <a href="#0" className="onsite-button btn btn-2nd"><span>Get a free quote</span></a>
                </div>
            </div>
            {/* delivery */}
            <div className="delivery">
                <div className="delivery-left">
                    <div className="delivery-title">What we deliver</div>
                    <p className="delivery-text">
                        As a family-owned business, we take immense pride in offering a
                        24/7 Service that sets us apart from the rest. With a focus on
                        transparency and customer convenience, we believe in keeping
                        things simple and hassle-free for our valued customers. That’s why
                        we proudly offer a $0 callout, upfront pricing & Lifetime labour
                        warranty, ensuring that you know exactly what to expect right from
                        the start.
                    </p>
                    <div className="delivery-boxes">
                        <div className="delivery-box">
                            <div className="mini-container">
                                <img src={deliveryIcon1} alt="" />
                                <div className="mini-upper">Lifetime labourwarranty</div>
                            </div>
                            <div className="mini-lower">We pride ourselves on our workmanshipand guarantee our service.</div>
  
    
                            
                        </div>
                        <div className="delivery-box">
                            <div className="mini-container">
                                <img src={deliveryIcon2} alt="" />
                                <div className="mini-upper">Fully licensed & insured</div>
                            </div>
                            <div className="mini-lower">Our professionals are reliable and provide compliance certificates for your peace of mind.</div>
                        </div>
                    </div>
                </div>
               
                <div className="delivery-right">
                   
                </div>
            </div>
      </div>
    )
  }
}
