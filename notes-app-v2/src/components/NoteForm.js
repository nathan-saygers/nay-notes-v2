import React, {Component} from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: '',
        body: '',
        type: 'Work'
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
    console.log('state from insde handleChange', this.state)
  }

  handleDropDownChange = event => {
    this.setState({type: event.target.value})
    console.log('this fired')
  }

  render() {
    return(
      <form action="">
        <input type="text" name='title' value={this.state.title} onChange={this.handleChange}/>
        <input type="text" name='body' value={this.state.body} onChange={this.handleChange}/>
        <select value={this.state.value} onChange={this.handleDropDownChange}>
          <option value="Work">Work</option>
          <option value="Fun">Fun</option>
          <option value="Misc">Misc.</option>
        </select>
      </form>
    )
  }
}

export default NoteForm;