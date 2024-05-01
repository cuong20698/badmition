import React from 'react'
import Navbar from './Section/navbar'
import '../styles/home.css'
import Search from './Section/search'
import Footer from './Section/footer'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        {/* <div className='home-content'>
            <Search/>
        </div> */}
        <div className='content'>
            <div className='form'></div>
            <div className='show'></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home