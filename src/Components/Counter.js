import React, { Component } from 'react'



export default class Counter extends Component {
  state = {
    count : 0
  };


  incrementNumber = () => {
    this.setState({count : this.state.count+1})
  }

  currentCount = () =>{
    return this.state.count === 0 ? 'Zero' : this.state.count
  }

  resetCount = () =>{
    this.setState({count : 0})
  }

  


  render() {
    return (
      <div className='container'>
        <span >{this.currentCount()}</span>
         <button type="button" className="btn btn-primary" onClick={this.incrementNumber}>Zwieksz</button>
        <button type="button" className="btn btn-secondary" onClick={this.resetCount}>Zresetuj</button>
      </div>
    )
  }
}



