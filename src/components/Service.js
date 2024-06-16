import React, { Component } from 'react'
import './Service.css'
import pipesIcon from '../images/Asset 29.png'

export default class Service extends Component {
  render() {
    return (
      <div className='Service'>
            <div className="bar">
                <div className="icon-containing">
                    <img src={pipesIcon} alt="" />
                </div>
                <div className="bottom-blue-bar"><p className="hot-water">{this.props.text}</p></div>
            </div>
      </div>
    )
  }
}
