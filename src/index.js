import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 위에서 만드 App.js 컴포넌트를 불러온다.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // index.html의 id="rood" 인 DOM에 APP 컴포넌트를 그린다.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
