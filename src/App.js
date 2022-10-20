import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Headline from './pages/Headline'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='headlines' element={<Headline />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
