import React from 'react'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
    <>
        <div className='nav flex items-center justify-between px-10 bg-amber-300 fixed top-0 w-full z-50'>
      <h2>Shahnawaz</h2>
      <div>
      <NavbarLinks />
      </div>
      </div>
    </>
    
  )
}

export default Navbar
