import React from 'react'
import NavbarLinks from './NavbarLinks'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP


 } from '@gsap/react'
const Navbar = () => {

const gsapRef = useRef()

useGSAP(()=>{
  const tl = gsap.timeline()
  tl.from(gsapRef.current.querySelectorAll('h2'),{
    y:-20,opacity:0,duration:0.8,delay:0.5,
})
})

  return (
    <>
        <div ref={gsapRef} className='nav flex items-center justify-between px-10 fixed top-0 w-full z-50 mt-4'>
      <h2 className='logo text-[2em] text-[rgba(231,207,177,1)]'>Shahnawaz</h2>
      <div>
      <NavbarLinks />
      </div>
      </div>
    </>
    
  )
}

export default Navbar
