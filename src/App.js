import React, { Component } from 'react';
import { DB_CONFIG } from './firebase.js';
import _ from 'lodash';
import './css/index.css';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from './actions/noteAction';
import NoteCard from './components/NoteCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      body: '',
      notes:{}
    };
  }

  // input box 
  change = (event) => {
    // console.log('hey');
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  // submit button 
  submit = (event) => {
    // console.log('hey');
    event.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    // DB_CONFIG.push(note);
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: ''
    })
  }

  // fetching data from firebase
  componentDidMount(){
    this.props.getNotes();
  }

  // displaying notes
  displayNotes = () => {
    return _.map(this.props.notes, (note,key) => {
      return(
        <NoteCard key={key}>
          <h3 className="testt"> {note.title}</h3>
          <p> {note.body}</p>
          <button className="btn btn-danger" onClick={() => this.props.deleteNote(key)}> Delete </button>
        </NoteCard>
      )
    });
  }
  
  render() {
    return (
      <div className="App">
      <form onSubmit={this.submit}>
        <input 
          type="text" 
          name="title" 
          onChange={this.change}
          value={this.state.title}
          /> 
        <br/>
        <textarea 
          onChange={this.change} 
          type="text" 
          name="body"
          value={this.state.body}
          />
        <br/>
        <button className="test"> Click </button>
      </form>
      
      {this.displayNotes()}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
      notes: state.notes
  }
}
export default connect(mapStateToProps, { getNotes, saveNote, deleteNote }) (App);


