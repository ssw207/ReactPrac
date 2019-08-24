import React, { Component } from 'react';

class CounterLifeCycle extends Component {
  state = {
    number: 0
  }

  constructor(props) { // 생성자 실행시 부모에 props값 전달. 
    super(props);
    console.log('constructor');
  }
  
  componentWillMount() {// 컴포넌트 실행전에 실행
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() { // 컴포넌트가 화면에 노출될때 실행
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) { // false일때 랜더링하지 않음
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {// shouldComponentUpdate true일때 실행
    console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) { // 컴포넌트의 render실행후 실행
    console.log('componentDidUpdate');
  }
  

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default CounterLifeCycle;