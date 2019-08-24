import React, { Component } from 'react';

const Promblematic = () => { //자식 컴포넌트
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

class Counter extends Component {
  state = {//클래스 내부에서 사용되는 변수, 변경가능
    number : 0 ,
    error: false
  }
  
  increase = () => {
    const {number} = this.state // state의 값중 number을 할당?
    this.setState({
      number: number + 1 // 할당한값에 +1 한후 state의 number값 변경
    });
  }

  decrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  }

  componentDidCatch(error, info) { // 자신의 랜더의 에러는 잡지못하고 자식컴포넌트의 에러만 잡을수 있다.
    this.setState({
      error: true
    });
  }

  render() {
    //에러나는 경우1
    // this.props.object.value; // object is undefined
    // this.props.array.length; // array is undefined
    // this.props.onClick();
    
    //유효성 검사
    if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;
    if (this.state.error) return (<h1>에러발생!</h1>);

    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Promblematic /> }
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;