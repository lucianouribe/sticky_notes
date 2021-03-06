import React, { Component } from 'react';
import StickyNoteForm from './StickyNoteForm';
import Note from './Note';

class StickyNotes extends Component {
  constructor(props) {
    super(props);

    this.state = { notes: [] };

    this.addNote = this.addNote.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  addNote(title, body, author, color) {
    let note = { title, body, author, color}
    this.setState({ notes: [note, ...this.state.notes]});
  }

  deleteNote(index) {
    if(confirm('Delete Note?')) {
      let notes = this.state.notes;
      // notes.splice(index, 1);
      // this.setState({ notes });
      this.setState({ notes: notes.filter((_, i) => index !== i) });
    }
  }

  displayNotes() {
    let notes = this.state.notes;
    if(notes.length) {
      return notes.map( (note, index) => {
        return(<Note key={index} note={note} index={index} deleteNote={this.deleteNote} editNote={this.editNote}/>);
      });
    } else {
      return(<h4>No notes. Please add one!</h4>);
    }
  }

  editNote(index, note){
    let notes = this.state.notes.map( (note, i) => {
      if (i === index)
        return {...note, color: note.color }
      return note
    });
    this.setState({ notes });
  }
  
  render() {
    return(
      <div>
        <StickyNoteForm addNote={this.addNote} />
        <hr/>
        <div className='row'>
          { this.displayNotes() }
        </div>
      </div>
    );
  }
}
export default StickyNotes;
