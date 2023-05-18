import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Product from './Components/Product'
import Category from './Components/Category'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'
import Worth from './Components/Worth'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <Product></Product>
      <Category></Category>
      <Testimonial></Testimonial>
      <Worth></Worth>
      <Footer></Footer>
    </div>
  )
}

export default App