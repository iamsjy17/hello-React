import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    });
  };

  handleRemove = index => {
    const { names } = this.state;
    this.setState({
      names: names.filter((item, i) => i !== index)
    });
  };

  render() {
    const nameList = this.state.names.map(
      (name, index) => (
        <li key={index} onDoubleClick={() => this.handleRemove(index)}>
          {name}
        </li>
      )
      // function(name){return <li>{name}</li>}
      // jsx문법
    );
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }

  song() {
    return <li>song</li>;
  }
}

export default IterationSample;
