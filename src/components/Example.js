import React, { Component } from 'react'
import './Example.css'

export default class Example extends Component {
  render() {
    return (
      <div className='exampleBox'>
            <div className="example-logo "><span>LOGO</span></div>
            <div className='example-text'>
              <div>
                
              </div>
                <div className="upper-example-text">At the end of the day, our goal is simple: to
                    provide reliable, exceptional plumbing services
                    that exceed expectations</div>
                <div className="lower-example-text">This dedication to customer satisfaction, along with our experience and technical expertise, is what
                    sets us apart. <br />
                    Get started today with <a className='example-link' href='#0'>plumbing example</a> </div>
                </div>
      </div>
    )
  }
}
