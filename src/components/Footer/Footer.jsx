import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="top-side">
            <div className="first">
                <h1>Krishna Mohan</h1>
                <p>Building feasible products that are both smart and scalable, designed to be genuinely helpful in solving real-world problems.</p>
                <div className="social-links">
                    <a href="https://github.com/Mohan5488" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/krishna-mohan-2a2971259/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:krishnabudumuru7@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                </div>
            </div>
            <div className="second">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="third">
                <h2>Contact</h2>
                <p>Visakhapatnam, Andhra Pradesh, India</p>
                <p>krishnabudumuru7@gmail.com</p>
                <p>+91 9553220667</p>
            </div>
        </div>
        <div className="bottom-side">
            <div>
                <p>&copy; {new Date().getFullYear()} Krishna Mohan. All rights reserved.</p>
            </div>
            <div>
                <p>Collabration Available</p>
            </div>
        </div>
    </div>
  )
}

export default Footer