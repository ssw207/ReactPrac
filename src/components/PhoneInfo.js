import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps  ={
    info: {
      name: '이름',
      phone: '0101-000-0000',
      id:0
    }
  }
  render() {
    const style = {
      border: '1px solid black',
      paddin: '8px',
      margin: '8px'
    };

    const {
      name,phone,id
    } = this.props.info; // 부모로부터 전발받은 값 할당

    return (
      <div style={style}>  
        <div><b>{name}</b></div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PhoneInfo;
