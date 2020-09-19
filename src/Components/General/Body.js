import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import  Dashboard from "../User POV/Dashboard";

class Body extends Component {
  render () {
    return (
    <div>
    
    <Route  exact path='/' component={Dashboard}/>
    </div>
    )
  }
}

export default Body