import React, { Component } from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Index'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingDetail from '../parts/Cart/ShippingDetail'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default class Cart extends Component {
  render() {
    return (
      <>
        <Header theme="black" />

        <Breadcrumb list={[
          {url: "/", name:"Home"},
          {url: "/chart", name:"Shopping Cart"},
        ]}/>

        <section className="md:py-16">
          <div className="container mx-auto px-4">
              <div className="flex -mx-4 flex-wrap">
                <ShoppingCart />
                <ShippingDetail />
              </div>
          </div>
        </section>


        <Sitemap />
        <Footer />
      </>
    )
  }
}
