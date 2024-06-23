import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>   {/*Outlet --> Top aur bottom components same rhenge */ }
    <Footer/>
    </>
  )
}

export default Layout
