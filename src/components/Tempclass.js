import React, { Component } from 'react'
import './Temp.css';

export class Tempclass extends Component {
  constructor() {
    super();
    this.state = {
      temp: 0,
      color: ''
    };
  }

  handleChange = (e) => {
    this.setState(e.target.value);
  }

  incTemp = () => {
    this.setTemp(Number(this.state.temp) + 1);
    if (this.state.temp >= 0 && this.state.temp < 20) {
      this.setColor('green')
    }
    else if (this.state.temp >= 20 && this.state.temp < 40) {
      this.setColor('blue')
    }
    else if (this.state.temp >= 40 && this.state.temp < 60) {
      {
        this.setColor('red')
      }
    }
  }
  decTemp = () => {
    if (this.state.temp > 0) {
      this.setTemp(Number(this.state.temp) - 1);
    }
    if (this.state.temp <= 41 && this.state.temp > 20) {
      this.setColor('blue')
    }
    else if (this.state.temp <= 21 && this.state.temp > 1) {
      this.setColor('green')
    }
    else if (this.state.temp <= 1) {
      this.setColor('')
    }
  }
  resetTemp = () => {
    this.setTemp(0)
    this.setColor('')
  }


  render() {
    return (
      <div className='body'>
        <h1 style={{ marginTop: "0px", marginLeft: "35%" }} >Class Temperature</h1>
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div className="center" style={{ background: this.state.color }}>
            <h1 style={{ marginLeft: "65px" }} value={this.state.temp} onChange={this.handleChange}>{this.state.temp}°C</h1>
          </div>
          <div style={{ marginTop: "0px", marginLeft: "35%" }}>
            <button type="button" class="btn btn-secondary" onClick={this.incTemp} >+</button>
            <button type="button" class="btn btn-secondary" onClick={this.decTemp} >-</button>
            <button type="button" class="btn btn-secondary" onClick={this.resetTemp} >Reset</button>
          </div>

        </div>
      </div>
    )
  }
}