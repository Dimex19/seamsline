// import React from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import JoinSeamsline from "../components/JoinSeamsline"
import Register from "../components/Register"
import ToolsForCreatives from "../components/ToolsForCreatives"
import ToolsForCustomers from "../components/ToolsForCustomers"
import ToolsForVendors from "../components/ToolsForVendors"
import { Toaster } from "react-hot-toast";

const Landing = () => {
  return (
    <>
        <div className="mx-auto">
          <Toaster position="top-center" />
          <Header/>
          <Hero/>
          <Register/>
          <JoinSeamsline/>
          <ToolsForCreatives/>
          <ToolsForCustomers/>
          <ToolsForVendors/>
          <Footer/>
        </div>
    </>
  )
}

export default Landing