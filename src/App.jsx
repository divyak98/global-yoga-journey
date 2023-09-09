import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Staff from './components/staff/staff'
import Cards from './components/cards/cards'
import Packages from './components/packages/packages'
import Review from './components/review/review'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Staff/>
      <Packages/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App
