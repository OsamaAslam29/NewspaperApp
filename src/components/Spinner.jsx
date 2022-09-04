import React, { Component } from 'react'
import loading from '../assets/images/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loading" />
        
      </div>
    )
  }
}
