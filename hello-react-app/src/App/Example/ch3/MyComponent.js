import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  state = {
    number: 0
  };

  static defaultProps = {
    name: '기본 이름',
    age: 0
  };
  
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  };

  onClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
        <p>제 나이는 {this.props.age} 입니다.</p>
        <p>제 번호는 {this.state.number} 입니다.</p>
        <button onClick={this.onClick}>더하기</button>
      </div>
    );
  }
}
export default MyComponent;
