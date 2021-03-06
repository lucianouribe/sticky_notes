import React, { Component } from 'react';
import './App.css';
import StickyNotes from './components/StickyNotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Sticky Notes</h2>
        </div>
        <div className="App-intro container">
          <StickyNotes />
        </div>
      </div>
    );
  }
}

export default App;
