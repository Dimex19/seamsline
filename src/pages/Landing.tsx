// import React from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import JoinSeamsline from "../components/JoinSeamsline"
import Register from "../components/Register"
import ToolsForCreatives from "../components/ToolsForCreatives"
import ToolsForCustomers from "../components/ToolsForCustomers"
import ToolsForVendors from "../components/ToolsForVendors"

const Landing = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Register/>
        <JoinSeamsline/>
        <ToolsForCreatives/>
        <ToolsForCustomers/>
        <ToolsForVendors/>
        <Footer/>
    </>
  )
}

export default Landing