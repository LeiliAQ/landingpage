import React, { Component } from 'react'
import './Example.css'

export default class Example extends Component {
  render() {
    return (
      <div className='exampleBox'>
            <div className="example-logo logo">LOGO</div>
            <div className='example-text'>
                <p className="upper-example-text">At the end of the day, our goal is simple: to
                    provide reliable, exceptional plumbing services
                    that exceed expectations</p>
                <div className="lower-example-text">This dedication to customer satisfaction, along with our experience and technical expertise, is what
                    sets us apart.
                    Get started today with <a className='example-link' href='#0'>plumbing example</a> </div>
            </div>
      </div>
    )
  }
}
