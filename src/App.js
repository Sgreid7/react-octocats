import React, { Component } from 'react'
import Octocats from './components/Octocats'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <Octocats />

        <Footer />
      </>
    )
  }
}

export default App
