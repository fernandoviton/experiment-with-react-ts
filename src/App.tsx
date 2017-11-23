import * as React from 'react';
import './App.css';
import JSONTree from 'react-json-tree';

const logo = require('./logo.svg');

const json = {
    array: [1, 2, 3],
    bool: true,
    object: {
      foo: 'bar'
    }};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <JSONTree data={json}/>
      </div>
    );
  }
}

export default App;
