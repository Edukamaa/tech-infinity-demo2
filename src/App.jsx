import React from 'react'
import Topbar from './Components/Navbar/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import SectionHeader from './Components/Navbar/Header/Header'
import Hero from './Components/Navbar/Hero/Hero'
import Services from './Components/Services/Services'
import Choose from './Components/Choose/Choose'
import Reviews from './Components/Reviews/Reviews'
import Consultation from './Components/Consultation/Consultation'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <SectionHeader/>
      <Hero/>
      <Services/>
      <Choose/>
      <Reviews/>
      <Consultation/>
      <Footer/>
      
    </div>
  )
}

export default App
