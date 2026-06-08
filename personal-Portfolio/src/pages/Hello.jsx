import React from 'react'
import { gsap } from 'gsap'
import { useEffect,useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Hello = () => {
  const gsapRef = useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
    y:20,opacity:0,stagger:0.2,
    scrollTrigger: {
        trigger: "#hello",
        scroller: "body",
        markers: true,
        scrub: true,
        start: "top 90%"}
})
  })
  return (
    <div>
      <div ref={gsapRef} className='hellodiv flex bg-black text-yellow-300 min-h-screen justify-center items-center gap-3'>
      <h2 ref={gsapRef} className='text-9xl gap-2'>H</h2>
      <h2 className='text-9xl'>e</h2>
      <h2 className='text-9xl'>l</h2>
      <h2 className='text-9xl'>l</h2>
      <h2 className='text-9xl'>o</h2>
      </div>
    </div>
  )
}

export default Hello
