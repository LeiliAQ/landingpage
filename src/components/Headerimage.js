import React, { Component } from 'react'
import './Headerimage.css'

export default class Headerimage extends Component {
  render() {
    return (
      <div>
        <img className='header-image' src={this.props.image} alt="" />
      </div>
    )
  }
}
