import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//Here we use Outlet
//An outlet is a component that allows you to render any child components within it.

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout