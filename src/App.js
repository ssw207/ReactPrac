import React from 'react'; // 리엑트, 내부 컴포넌트 호출
import MyName from './MyName';
import Counter from './Counter';
import CounterLifeCycle from './CounterLifeCycle';
import Problematic from './Promblematic';
import logo from './logo.svg'; 
import './App.css';

function App() {
  const name ='react';
  return (
    <frameElement>
      <Problematic/>
      
      {/* <CounterLifeCycle/> */}
      
      {/* <Counter /> */}

      {/* <MyName name="홍길동"/> */}
    </frameElement>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App; //컴포넌트를 다른곳에서 사용할수 있도로 내보내기
