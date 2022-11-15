import React from 'react'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'

const MenuPage = () => {
  return (
    <div style={{marginTop : "120px"}}>
        <Header />
        <Filters />
        <Menu />
        <Footer />
    </div>
  )
}

export default MenuPage
