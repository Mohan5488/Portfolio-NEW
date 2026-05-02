import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects/Projects'
import ViewCaseStudy from './components/CaseStudy/ViewCaseStudy'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/contact'
import Chapter5 from './components/Chapter5/Chapter5'
import Experience from './components/Experience/Experinece'
import Intro from './components/Intro/Intro'
import { useState, useEffect } from 'react'

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('visited');
  });

  // Optional: Only show intro once per browser session
  useEffect(() => {
    if (showIntro) {
      sessionStorage.setItem('visited', 'true');
    }
  }, [showIntro]);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
     <>
      {showIntro && <Intro onFinish={handleIntroFinish} />}
      <div className={showIntro ? 'content-hidden' : 'content-visible'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/view-case-study/:id' element={<ViewCaseStudy />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<Chapter5 />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </div>
     </>
  )
}

export default App