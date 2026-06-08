import React from 'react'
import { gsap } from 'gsap'
import { useEffect,useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { h2 } from 'framer-motion/client'

gsap.registerPlugin(ScrollTrigger)

const Hello = () => {
  const gsapRef = useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current.querySelectorAll('h2'),{
    y:20,opacity:0,stagger:0.2,
    scrollTrigger: {
        trigger: gsapRef.current,
        scroller: "body",
        scrub: true,
        start: "top 120%"}
})
  })
  return (
    <div>
      <div ref={gsapRef} className='hellodiv flex bg-black text-yellow-300 min-h-screen justify-center items-center gap-3'>
      <h2 className='text-[37em] gap-2'>H</h2>
      <h2 className='text-[37em]'>e</h2>
      <h2 className='text-[37em]'>l</h2>
      <h2 className='text-[37em]'>l</h2>
      <h2 className='text-[37em]'>o</h2>
      </div>
    </div>
  )
}

export default Hello
