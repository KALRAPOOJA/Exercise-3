import React, { Component } from 'react';

import './App.css';
import Display from './Display';

class App extends Component {
  render() {
    return (
        <div>
      <div id ="head">
        <h1>Hii, I am react app!!</h1>
        </div>
        <div id="app1">
        <Display name='John' age='20'/>
        </div>
        <div id="app2">
        <Display name='Wrick' age='27'/>
        </div>
      </div>
    );
  }
}
export default App;
