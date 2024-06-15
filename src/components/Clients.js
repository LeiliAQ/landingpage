import React, { Component } from 'react'
import './Clients.css'
import starIcon from '../images/starpng.png'

export default class Clients extends Component {
  render() {
    return (
      <div Clients>
        <div className="clients-container">
        <div className="Clients-title">What our clients say.</div>
        <div className="clients-boxes">
            <div className="clients-box">
                <p className='blueicon'>"</p>
                <p className='client-box__title'>John Smith</p>
                <p className='client-box__text'>This is placeholder text This is placeholder textThis is
                placeholder textThis is placeholder textThis is placeholder
                textThis is placeholder text</p>
                <div className="stars">
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                </div>
                <p className='client-box__footer'>Abbotsford</p>
            </div>

            <div className="clients-box">
                <p className='blueicon'>"</p>
                <p className='client-box__title'>John Smith</p>
                <p className='client-box__text'>This is placeholder text This is placeholder textThis is
                placeholder textThis is placeholder textThis is placeholder
                textThis is placeholder text</p>
                <div className="stars">
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                </div>
                <p className='client-box__footer'>Five Dock</p>
            </div>

            <div className="clients-box">
                <p className='blueicon'>"</p>
                <p className='client-box__title'>John Smith</p>
                <p className='client-box__text'>This is placeholder text This is placeholder textThis is
                placeholder textThis is placeholder textThis is placeholder
                textThis is placeholder text</p>
                <div className="stars">
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                    <img className='starIcon' src={starIcon} alt="" />
                </div>
                <p className='client-box__footer'>Ultimo</p>
            </div>
            
        </div>
        </div>

      </div>
    )
  }
}

