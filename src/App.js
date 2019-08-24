import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0 // 랜더링과 상관없는값은 state에 선언할 필요없다. 어디서 사용되지?
  state = {
    info: [
      // {
      //   id:0,
      //   nmae:'이름1',
      //   phone:'011-111-1111'
      // },
    ]
  }
  handlerCreate = (data) => {
    const { info } = this.state;
    this.setState({
      info:info.concat({id: this.id++,name:data.name, phone:data.phone})
    })
  }
  
  handlerRemove = (id) => {
    const { info } = this.state;
    this.setState({
      info:info.filter(info => info.id !== id) // 입력한 id만 배열에서 제거
    })
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handlerCreate}
        />
        <ol>
          <li>state객체에 info[id,이름,phone]배열이 세팅되어있음</li>
          <li>랜더링 될경우 state의 info배열을 json형태로 아래 표현</li>
        </ol>
        <PhoneInfoList 
          data={this.state.info}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
