import React, { Component } from 'react'

export default class EventHandlerClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue :''
    }
  }

  handleChange  = (e) =>{
    this.setState({
      changedValue: e.target.value
      })
  }


 
  render() {
    return (
      <div>
      <h3>Event handling</h3>
     <input type="text" onChange={this.handleChange}/>
     <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
