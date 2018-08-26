import React, { Component } from 'react';

const Promblematic = () => {
  throw new Error('버그가 나타났다!');
  return <div />;
};

class Counter extends Component {
  state = {
    number: 0,
    error: false
  };

  /////////////////////////////////초기 생성/////////////////////////////////////
  //1. 생성자
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //2. 화면에 나가기 직전(현재는 사용되지 않음.)
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  //3. 컴포넌트가 화면에 보이는 시점.
  componentDidMount() {
    console.log('componentDidMount');
  }

  /////////////////////////////////컴포넌트 업데이트/////////////////////////////////////
  //1. 컴포넌트를 업데이트 할 지 여부를 정할 수 있음.
  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  //2. 렌더 호출 직전
  //1번 shouldComponentUpdate가 true를 리턴하는 경우에만 호출된다.
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  //3. render 이후
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  //4. 예외처리
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: number - 1
    }));
  };

  render() {
    console.log('render');
    if (this.state.error) return <h1>에러발생!</h1>;
    else {
      return (
        <div>
          <h1>카운터</h1>
          <div>값: {this.state.number}</div>
          {this.state.number === 4 && <Promblematic />}
          <button onClick={this.handleIncrease}>+</button>
          <button onClick={this.handleDecrease}>-</button>
        </div>
      );
    }
  }
}

export default Counter;
