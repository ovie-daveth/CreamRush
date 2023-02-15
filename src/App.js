import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  return (
    <div className='container'>
      <AnimatePresence >
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/*" element={<Home />}/>
            </Routes>
      </BrowserRouter>
    </AnimatePresence>
  </div>
 
  )
}

export default App
