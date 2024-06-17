import React, { Component } from 'react'
import './Others.css'
import Repairbanner from './Repairbanner'
import Sydney from './Sydney.js'

export default class Others extends Component {
  render() {
    return (
      <div className='Others'>
        <div className="others-container">
                <Repairbanner/>
                <Sydney/>
        </div>
      </div>
    )
  }
}
