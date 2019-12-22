import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  render() {
    return (
      <Router>
        <div>
          Hello, world
        </div>
      </Router>
    )
  }
}

export default App;
