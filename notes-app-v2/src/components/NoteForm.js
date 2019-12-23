import React, {Component} from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNote: {
        id: Date.now,
        title: '',
        body: '',
        type: ''
      }
    }
  }

  handleChange = event => {
    this.setState({newNote: event.target.value})
    console.log(
      'NewNote Title:', this.state.newNote.title,
      'NewNote Body:', this.state.newNote.body,
      'NewNote Tag', this.state.newNote.type,
      )
  }

  render() {
    return(
      <form action="">
        <input type="text" value={this.state.newNote.title} onChange={this.handleChange}/>
        <input type="text" value={this.state.newNote.body} onChange={this.handleChange}/>
        <select>
          <option value="Work">Work</option>
          <option value="Fun">Fun</option>
          <option value="Misc">Misc.</option>
        </select>
      </form>
    )
  }
}

export default NoteForm;