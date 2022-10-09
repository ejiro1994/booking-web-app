import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <h1>Home</h1>
      </React.Fragment>
    )
  }
}
