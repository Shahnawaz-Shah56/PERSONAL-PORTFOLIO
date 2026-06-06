import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hello from './pages/Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    
     <Hello />
     <Contact />
    </div>
    </>
  )
}

export default App
