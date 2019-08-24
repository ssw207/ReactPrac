import React, { Component } from 'react';

class Counter extends Component {
  state = {//클래스 내부에서 사용되는 변수, 변경가능
    number : 0 
  }
  
  increase = () => {
    const {number} = this.state // state의 값중 number을 할당?
    this.setState({
      number: number + 1 // 할당한값에 +1 한후 state의 number값 변경
    });
    
    // 같은 방식
    // this.setState({
    //   number: this.state.number + 1
    // });
  }

  decrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
    // 같은 방식.
    // this.setState({
    //   number: this.state.number - 1
    // });
  }

  render() {
    return (
      <frameElement>
        <div>
          <h1>카운터</h1>
          <div>값: {this.state.number}</div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>

        <ol>
          <li>+ 클릭시 Counter컴포넌트의 increase 매서드 시작</li>
          <li>setState매서드 호출 state에 저장된 number값을 호출후 +1한값을 number에 재할당</li>
          <li>virtual DOM생성후 기존DOM과 비교하여 변경된 부분 랜더링</li>
        </ol>
      </frameElement>
      
    );
  }
}

export default Counter