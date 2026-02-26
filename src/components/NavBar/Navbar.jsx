import React, { useState } from 'react'
import '../NavBar/Navbar.css'
import {motion} from 'framer-motion'
import {FaBarsStaggered} from 'react-icons/fa6'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [bar, setBar] = useState(false)
  return (
    <>
    <nav>
        <div className="nav-left">
            <motion.div
            whileHover={{rotate : -8}}
            transition={{type : "spring", stiffness : 260, damping : 20}}
             className='logo'>KM</motion.div>
            <h1>Krishna Mohan</h1>
        </div>
        <div className="nav-right">
            <ul>
                <li><a href="#home">Journey</a></li>
                <li><Link to="/experience">Experience</Link></li>
            </ul>
        </div>
        <FaBarsStaggered onClick={() => setBar(!bar)} className='bar-icon'/>
    </nav>

    <div className={`sidebar-overlay ${bar ? 'open' : ''}`} onClick={() => setBar(false)}></div>
      <div className={`sidebar ${bar ? "open" : ""}`}>
        <RxCross2 className="close-btn" onClick={() => setBar(false)} />

        <ul>
          <motion.li
          initial = {{opacity: 0, y : 25}}
          whileInView={{opacity:1, y : 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onClick={() => setBar(false)}>Journey</motion.li>
          <motion.li
          initial = {{opacity: 0, y : 25}}
          whileInView={{opacity:1, y : 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} onClick={() => setBar(false)}>Experience</motion.li>
           <motion.li
          initial = {{opacity: 0, y : 25}}
          whileInView={{opacity:1, y : 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} onClick={() => setBar(false)}>Projects</motion.li>
           <motion.li
          initial = {{opacity: 0, y : 25}}
          whileInView={{opacity:1, y : 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} onClick={() => setBar(false)}>Skills</motion.li>
          <motion.li
          initial = {{opacity: 0, y : 25}}
          whileInView={{opacity:1, y : 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }} onClick={() => setBar(false)}>Contact</motion.li>
        </ul>
        <button className="login-button">Resume</button>
      </div>
    </>
  )
}

export default Navbar