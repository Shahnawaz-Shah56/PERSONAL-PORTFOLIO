import React from 'react'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
    <>
        <div className='nav flex items-center justify-between px-10'>
      <h2>Shahnawaz</h2>
      <div>
      <NavbarLinks />
      </div>
      </div>
    </>
    
  )
}

export default Navbar
