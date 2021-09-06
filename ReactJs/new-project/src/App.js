import React, { Component } from 'react'
import Test from "./components/test";
import Title from "./components/title";

class App extends Component {
  state = {
    title: "Title component",
    toggle: false,
    test: "Test Component"
  };

  changeTitle = () => {
    // agar state ni yangi malumoti eski malumotga bog'liq bo'lsa setState ni ichiga arrow function yordamida malumot uzatamoz. Sababi state async hisoblanadi 
    this.setState((state) => {
      return { title: "Changed title", toggle: !state.toggle }
    })
  }
  render() {
    return (
      <>
        <div className="block">
          <Test test={this.state.test}/>
          <Title title={this.state.title}/>
        </div>
      </>
    );
  }
}

export default App;
