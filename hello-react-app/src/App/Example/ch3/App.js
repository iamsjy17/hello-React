import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return <MyComponent name="송타" age={29} />;
  }
}

export default App;
