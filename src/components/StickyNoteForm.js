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
          <div class="input-field col s6">
            <label>Title</label>
            <input type='text' ref='title' required />
          </div>
          <div class="input-field col s6">
            <label>Content</label>
            <textarea ref='body' required></textarea>
          </div>
          <div class="input-field col s6">
            <label>Author</label>
            <input type='text' ref='author' required />
          </div>
          <div class="input-field col s6">
            <label>Color</label>
            <input type='color' ref='color' required />
          </div>
            <br/>
            <input type='submit' className='btn' />
        </form>
      </div>
    );
  }

}

export default StickyNoteForm
