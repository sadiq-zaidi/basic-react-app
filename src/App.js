import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {

/*let user = {name:"Sadiq Zaidi", age: 26}

  let {name, age} = user;

  let name = user.name;       //These two lines are same as destructured line above
  let age = user.age;
  */

  return <div>
    Hello from App.js Updated, {name} Age = {age - 10}
    <br/>
    <Hello firstName={name}></Hello>
    </div>
}

export default App;
