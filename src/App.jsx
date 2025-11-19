import React from 'react'
import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'
import LandingPage from './pages/LandingPage'
import BookAppoint from './pages/BookAppoint'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomBuild from './pages/CustomBuild'

const App = () => {
  return (
    <section className='font-[nunito]'>
    

        <NavBar/>

        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/book' element={<BookAppoint/>}/>
          <Route path='/services' element={<CustomBuild/>}/>
        </Routes>

        <Footer/>

     
    </section>
  )
}

export default App

