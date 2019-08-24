import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleSubmit = (e) => {
    //페이지 리로딩방지
    //form 에서 submit 이 발생하면 페이지를 다시 불러오게 되는데 이 작업을 방지한다.
    e.preventDefault(); // 원래 이벤트가 해야 하는 작업을 방지
    this.props.onCreate(this.state); // 부모로부터 전달받은 onCreate 함수에 this.state전달 
  }

  handleChange = (e) => { // handleChange변수에 함수 맵핑, 호출시 전달된 이벤트는 e로 전달. 
    this.setState({
      [e.target.name]: e.target.value // e.target.name : 이벤트를 호출한 대상의 name. [e.target.name] 값으로 property의 name설정
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange} // 이벤트발생시 handleChange호출
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange} // 이벤트발생시 handleChange호출
          name="phone"
        />

        <div>이름 : {this.state.name}</div>
        <div>전화번호 : {this.state.phone}</div>
        <button type="submit">전송</button>
      </form>
    );
  }
}

export default PhoneForm;
