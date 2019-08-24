import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
  }

  render() {
    const { data, onRemove } = this.props; // data 배열가져오기
    const list = data.map( // data에서 값을 하나 꺼내서 로직실행후 배열반환
      info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove}/>) // key는 리엑트에서 배열 랜더링시 필요한값. 성능최적화를 위함. key는 array의 index가 됨. 지정하지 않을시 리엑트에서 index를 다시 부여하는 오버헤드 발생
    );

    return (
      <div> 
        {list}  
      </div>
    );
  }
}

export default PhoneInfoList;
