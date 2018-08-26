import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'blue',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50
      //   WebkitTransition: "all",
      //   MozTransition: "all",
      //   msTransition: "all"
    };
    return (
      <div className="my-div">
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        <h2>{condition ? '참' : '거짓'}</h2>
        <div style={style} />
      </div>
    );
  }
}

export default App;
