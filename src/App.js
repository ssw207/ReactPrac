import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2 // 랜더링과 상관없는값은 state에 선언할 필요없다. 어디서 사용되지?
  state = {
    info: [
      {
        id:0,
        name:'김길동',
        phone:'010-000-0001'
      },
      {
        id:1,
        name:'홍길동',
        phone:'010-000-0002'
      },

    ],
    keyword : ''
  }
  handlerCreate = (data) => {
    console.log('handerCreate작동');
    const { info } = this.state;
    this.setState({
      info:info.concat({id: this.id++,name:data.name, phone:data.phone})
    });
  }
  
  handlerRemove = (id) => {
    console.log('handlerRemove');
    const { info } = this.state;
    this.setState({
      info:info.filter(info => info.id !== id) // 입력한 id만 배열에서 제거
    });
  }

  handlerUpdate = (id, data) => {
    const { info } = this.state;
    console.log('handlerUpdate');
    console.log('data '+JSON.stringify(data));
    this.setState({
      info:info.map( // info에서 데이터를 하나씩 꺼내서 순행후 새로운맵 반환
        info => info.id === id 
          ? { ...info, ...data } // ... 배열 추가.
          : info //기존값 유지
      )
    });
  }

  handleChange  = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  render() {
    const { info, keyword } = this.state;
    // 키워드와 name이 일치하는 값만 리턴
    const filteredList = info.filter(
      info => info.name.indexOf(keyword) !== -1 
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handlerCreate}
        />
        <p>
          <input 
            placeholder="검색 할 이름을 입력하세요.." 
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handlerRemove}
          onUpdate={this.handlerUpdate}
        />
      </div>
    );
  }
}

export default App;