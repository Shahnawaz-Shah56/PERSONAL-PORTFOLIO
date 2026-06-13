import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef } from 'react'

const Start = () => {
    const text = 'Shahnawaz'
    const gsapRef = useRef()
    useGSAP(()=>{
        gsap.from(gsapRef.current.querySelectorAll('span'),{
            y:50,
            opacity:0,
            duration:0.4,
            delay:0.5,
            stagger:0.1
        })
    })
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-black'>
        <h2 ref={gsapRef} className='text-2xl text-white'>
            {text.split('').map((letter, i)=>(
                <span key={i}>{letter}</span>
            ))}
        </h2>
      </div>
    </div>
  )
}

export default Start
