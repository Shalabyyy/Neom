import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import Body from './Components/General/Body'
import NavBar from './Components/General/NavBar'

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <NavBar/>
          <Body></Body>
        </Router>
      </div>
    </div>
  );
}

export default App;
