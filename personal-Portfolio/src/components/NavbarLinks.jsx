import React from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const NavbarLinks = () => {
   const gsapRef = useRef()
   useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(gsapRef.current.querySelectorAll('a'),{
    y:-20,opacity:0,duration:0.3,stagger:0.1,delay:1
})
   })
  return (
   
    <div>
        <div ref={gsapRef} className='navlinks flex items-center gap-10'>
      <Link className='text-2xl text-[rgba(231,207,177,1)]' to='/'>Home</Link>
      <Link className='text-2xl text-[rgba(231,207,177,1)]' to='/about'>About</Link>
      <Link className='text-2xl text-[rgba(231,207,177,1)]' to='/contact'>Contact</Link>

        </div>
    </div>
  )
}

export default NavbarLinks
