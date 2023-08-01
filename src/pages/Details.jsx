import React, { Component } from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Index'
// import Hero from '../parts/Hero'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import JustArrived from '../parts/HomePage/JustArrived'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'

import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default class Details extends Component {
  render() {
    return (
      <>
        <Header theme="black" />

        <Breadcrumb list={[
          {url: "/", name:"Home"},
          {url: "/categories/91231", name:"Office Room"},
          {url: "/categories/91231/products/7888", name:"Details"},
        ]}/>

        <ProductDetails />
        <Suggestion />
        <Sitemap />
        <Footer />
      </>
    )
  }
}
