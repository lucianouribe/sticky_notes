import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.edit = this.edit.bind(this)
    this.display = this.display.bind(this)
  }

  display(){
    let note = this.props.note

    return(
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: note.color}}>
          <div className="card-content">
            <span className="card-title">{ note.title }</span>
            <p>{ note.body }</p>
            <i>{ note.author }</i>
          </div>
          <div className="card-action">
            <button className='btn stickybtn' onClick={this.toggleEdit} >Edit</button>
            <button className='btn stickybtn' onClick={() => this.props.deleteNote(this.props.index) }>Delete</button>
          </div>
        </div>
      </div>
    );
  }


  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleEdit() {
    let { title, body, author } = this.refs;
    let inputValue = {title: title.value, body: body.value, author: author.value};
    this.props.editNote(this.props.index, inputValue);
    this.toggleEdit();
  }

  edit() {
    let note = this.props.note;
    return(
      <div className="col s12 m4">
        <div className="card" style={{backgroundColor: note.color}}>
          <div className="card-content white-text">
            <input ref='title' defaultValue={note.title} className="card-title" />
            <input ref='body' defaultValue={note.body} />
            <input ref='author' defaultValue={note.author} />
          </div>
          <div className="card-action">
            <button onClick={this.toggleEdit} className='btn'>Cancel</button>
            <button onClick={this.handleEdit} className='btn'>Submit</button>
          </div>
        </div>
      </div>
    )
  }

  render(){
    if(this.state.edit) {
      return(this.edit());
    } else {
      return(this.display());
    }
  }
}

export default Note;
