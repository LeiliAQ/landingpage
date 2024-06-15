import React, { Component } from 'react'
import './Service.css'

export default class Service extends Component {
  render() {
    return (
      <div className='Service'>
            <div className="bar">
                <div className="icon-containing"></div>
                <div className="bottom-blue-bar"><p className="hot-water">{this.props.text}</p></div>
            </div>
      </div>
    )
  }
}
