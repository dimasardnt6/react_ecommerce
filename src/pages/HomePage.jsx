import React, { Component } from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import JustArrived from '../parts/HomePage/JustArrived'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <BrowseRoom />
        {/* <JustArrived /> */}
      </>
    )
  }
}
