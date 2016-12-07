import React, { Component } from 'react';
class StickyNoteForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    // grab the values
    let title = this.refs.title.value
    let body = this.refs.body.value
    let author = this.refs.author.value
    let color = this.refs.color.value

    // call the parent component addNote function
    this.props.addNote(title, body, author, color);
    this.refs.noteForm.reset();
    this.refs.title.focus();
  }

  render() {
    return(
      <div>
        <form ref='noteForm' onSubmit={ this.handleSubmit }>
          <div className="input-field col s6">
            <input type='text' ref='title' placeholder='title' required />
          </div>
          <div className="input-field col s6">
            <textarea ref='body' placeholder='write your text here' required></textarea>
          </div>
          <div className="input-field col s6">
            <input type='text' ref='author' placeholder='who are you?' required />
          </div>
          <div className="input-field col s6">
            <input className='color' type='color' ref='color' value="#FFFFA5" required />
          </div>
            <br/>
            <input type='submit' className='btn' />
        </form>
      </div>
    );
  }

}

export default StickyNoteForm
