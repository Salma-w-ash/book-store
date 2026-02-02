import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function AuthLayout() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}
