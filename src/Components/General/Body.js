import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import  Dashboard from "../User POV/Dashboard";
import Approver from '../Approver POV/Container'

class Body extends Component {
  render () {
    return (
    <div>
    
    <Route  exact path='/' component={Dashboard}/>
    <Route   path='/approver' component={Approver}/>
    </div>
    )
  }
}

export default Body