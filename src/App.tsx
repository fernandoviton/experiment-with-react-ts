import * as React from 'react';
import './App.css';
import JSONTree from 'react-json-tree';
import { SampleJson } from './sampleJson';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <JSONTree data={SampleJson}/>
      </div>
    );
  }
}

export default App;
