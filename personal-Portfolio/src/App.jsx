import Navbar from './components/Navbar'
import Start from './pages/Start'
import Home from './pages/Home'
import Hello from './pages/Hello'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'
import { useState } from 'react'

function App() {
  

  return (
    <>
      <div>

          <Navbar />
          <Start />
          <Home />
          <Hello />
          <About />
          <Contact />
      </div>
        
    </>
  )
}

export default App