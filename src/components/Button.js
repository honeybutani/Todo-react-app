import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      
        <button type="button" className="btn btn-info some-button">
            <div className="flex-center-wrapper">
            <span className="glyphicon-plus"></span>
            </div>
        </button>

    )
  }
}

export default Button
