import React, { Component } from 'react';
import { BrowerRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowerRouter>
      <div className="App">
        <Blog />
      </div>
      </BrowerRouter>
    );
  }
}

export default App;
