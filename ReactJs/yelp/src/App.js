import React, { Component } from 'react'
import Button from './components/button/Button'
import Sidebar from './components/sidebar'
import Wrapper from './components/wrapper/Wrapper'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCardSections } from './redux/card/card.selector';
import Container from './components/container';



class App extends Component {
  render() {
    const {sections} = this.props; 
    return (
      <Container px={10}>
        <Wrapper flex>
          <Sidebar />
          <Button circle outlined={"#ff0"}>hey</Button>
        </Wrapper >
      </Container>
    )
  }
}

const mapsStateToProps = createStructuredSelector({
  sections: selectCardSections
})

export default connect(mapsStateToProps)(App);
