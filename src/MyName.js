import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = { // 부모에서 값을 던지지않을때 사용
    name : '디폴트'
  }  
  render() {// 부모에서 전달받은값은 this로 접근가능
    return (
      <div>
        내이름은 <b>{this.props.name}</b> 입니다. 
        
      </div>
    )

  };
  
  // MyName.defaultProps = { 이렇게도 설정가능
  //   name: '기본이름'
  // };
}

const MyName2 = ({name}) => {
  return (
    <div>
      두번째 방법. 내이름은 {name} 입니다.
    </div>
  )
}
//export default MyName;
export default MyName2;