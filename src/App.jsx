import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
