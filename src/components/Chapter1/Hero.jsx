import React from 'react'
import '../Chapter1/Hero.css'
import FloatingLines from '../../ReactBits/FloatingLines/FloatingLines'
import Threads from '../../ReactBits/Threads/Threads'

const Hero = () => {
  return (
   <>
    <Threads enableMouseInteraction={true} enableTouchInteraction={true} 
    mouseSpeed={1} touchSpeed={1}
    >
        <div id="home" className="hero-component">
            <h1>Every system has a Story</h1>
            <h2>This one is MINE</h2>
            <a href="#chapter"><button>Start The Journey</button></a>
        </div>
    </Threads>
   </>
  )
}

export default Hero