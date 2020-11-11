import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
/*  React.createElement('div',null,"Hello World with createElement"),   // This line will createElement 
  React.createElement('div',null,React.createElement('div',null,"Hello in span using createElement")),    // Another example
  <div>Hello World with div</div>,        // This is synthetic sugar
  <div><App/></div>,  // This will also work
  */
  <div><App name="Sadiq Zaidi" age= {36} isReactDeveloper={true} /></div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
