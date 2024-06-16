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
                <p className='blueicon'>
                  {/* put doublequote */}
                  <svg className="doublequote-svg"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m4.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
                  
                </p>
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
                <p className='blueicon'>
                  {/* put doublequote */}
                  <svg className="doublequote-svg"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m4.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
                  
                </p>
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
                <p className='blueicon'>
                  {/* put doublequote */}
                  <svg className="doublequote-svg"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m4.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1 -3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>
                  
                </p>
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

