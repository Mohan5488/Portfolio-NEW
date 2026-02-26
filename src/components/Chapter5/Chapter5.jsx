import React from 'react'
import './Chapter5.css'
import {Link} from 'react-router-dom'

const Chapter5 = () => {
  return (
    <div className='chapter5-contanier'>
      <h1 className='h1'>Chapter 5</h1>
      <p className='p'>Where i am now</p>

      <div className="space">
        <div className="left-side">
          <img src="src/assets/profile.jpg" alt="" />
        </div>
        <div className="right-side">
          <h2>Current Focus</h2>
          <p>I've completed my full-stack development journey and am currently deepening my expertise in Agentic AI systems. My focus is on building intelligent, stateful AI workflows that can reason, act, and adapt beyond simple prompt–response patterns</p>
          <h2>What I'm Learning & Building</h2>
          <p>I'm learning how to design intelligent, multi-step systems that can reason through tasks, make decisions, and operate reliably within real-world workflows.</p>
          <h2>What I'm Looking For</h2>
          <p>I'm looking to work on projects or roles where I can:</p>
          <ul>
            <li>Build production-oriented agentic AI systems</li>
            <li>Collaborate with teams that value quality and learning</li>
            <li>Build systems that are used by real people</li>
          </ul>
          <div className="buttons">
            <Link to="/contact"><button>Contact Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/experience"><button>Experience</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chapter5