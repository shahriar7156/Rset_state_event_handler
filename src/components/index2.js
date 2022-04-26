import React, { Component } from 'react'
import Homepage from './Homepage'
import Loginpage from './Loginpage'

export default class Conditional_randering extends Component {
constructor(props) {
  super(props)

  this.state = {
    isLoggedin: true
  
  }
}

  render() {
    const {isLoggedin} =this.state;
    let element;
    element=isLoggedin? <Loginpage/>: <Homepage/>

    // if (isLoggedin){
    //   element= <Homepage />

    // }
    // else{
    //   element=<Loginpage />
    // }
    return (
      <div><h3>{element} </h3> </div> 
    )
    
  }
}

