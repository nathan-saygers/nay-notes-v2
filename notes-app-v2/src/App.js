import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';

import NotesList from './components/NotesList';
import NoteForm from './components/NoteForm';

 class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/notes')
      .then(res => {
        this.setState({
          notes: res.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('this is the notes', this.state.notes);
    return (
      <Router>
        <div>
          Hello, world
          <NoteForm />
          <NotesList notes={this.state.notes}/>
        </div>
      </Router>
    )
  }
}

export default App;
