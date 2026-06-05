import React from 'react'
import { Link } from 'react-router-dom';
const NavbarLinks = () => {
  return (
    <div>
        <div className='navlinks flex items-center gap-10'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>

        </div>
    </div>
  )
}

export default NavbarLinks
