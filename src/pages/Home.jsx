import React from 'react'
import Announcements from '../components/Announcements'
import Cat from '../components/Cat'
import Navbar from '../components/Navbar'
import Product from '../components/Products'
import Slider from '../components/Slider'
import News from '../components/News'
import Footer from '../components/Footer'


export default function Home() {

  return (
 
   
    <div>
        <Announcements/>
        <Navbar />
        <Slider/>
        <Cat />
        <Product/>
        <News/>
        <Footer/>
    </div>
  )
}
