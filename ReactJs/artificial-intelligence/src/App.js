import React, { Component } from 'react';
import Header from './components/header/Header';


class App extends Component {
  state = {
    header: 'Test'
  }
  changeH ()
  render() {
    return (
      <div className="App">
        <Header t={this.state.header}/>
      </div>
    );
  }
}

export default App;
