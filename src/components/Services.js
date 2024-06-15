import React, { Component } from 'react'
import './Services.css'
import Service from './Service'
import Headerimage from './Headerimage'

// Importing images 
import vulcan from '../images/vulcan.jpg';
import thermann from '../images/thermann.png';
import parisi from '../images/parisi.jpg';
import grohe from '../images/grohe.png';
import dux from '../images/DUX.jpg';
import aquamax from '../images/aquamax.jpg';
import rheem from '../images/rheem.png';

// Using imported images in the array
let imagesArray = [
  vulcan,
  thermann,
  parisi,
  grohe,
  dux,
  aquamax,
  rheem
];

export default class Services extends Component {
  render() {
    return (
      <div className='services-container'>
        <div className="header-title">Plumbing <span>services</span> we offer</div>
        <p className="header-text">We are industry leaders providing quality plumbing, drainage, hot water, and roofing-related
        services to our Community of Customers. </p>
        {/* services boxes */}
        <div className="services">
          <Service/>
          <Service/>
          <Service/>
          <Service/>
          <Service/>
          <Service/>
          <Service/>
          <Service/>
        </div>
        <div className="services-footer">
            <p className="header-subttile">We use well known brands including</p>
            <hr />
            <div className="header-images">
                {imagesArray.map((image, index) => (
                  <Headerimage key={index} image={image} />
                ))}
            </div>
        </div>
        
      </div>
    )
  }
}
