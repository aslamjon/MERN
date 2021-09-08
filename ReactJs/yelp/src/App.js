import React, { Component } from 'react'
import Button from './components/button/Button'
import Sidebar from './components/sidebar'
import Wrapper from './components/wrapper/Wrapper'

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar bgColor={"#000"}>Sidebar</Sidebar>
        <Button circle outlined={"#ff0"}>hey</Button>
      </Wrapper >
    )
  }
}
