import React, { useEffect, useState } from 'react';
import './Intro.css';
import FloatingLines from '../../ReactBits/FloatingLines/FloatingLines';

const Intro = ({ onFinish }) => {
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stage 1: Reveal first line
    const timer1 = setTimeout(() => setStage(1), 800);
    // Stage 2: Reveal second line
    const timer2 = setTimeout(() => setStage(2), 2200);
    // Stage 3: Reveal Enter Button
    const timer3 = setTimeout(() => setStage(3), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onFinish();
    }, 1200); // Match CSS fade-out duration
  };

  return (
    <div className={`intro-wrapper ${isExiting ? 'fade-out' : ''}`}>
      <FloatingLines 
        raysSpeed={0.5} 
        raysColor="#ffffff" 
        lightSpread={1.5} 
        rayLength={1.5}
      >
        <div className="intro-container">
            <div className="intro-content">
                <h1 className={`intro-text ${stage >= 1 ? 'visible' : ''}`} data-text="Architecting Digital Worlds">
                Architecting Digital Worlds
                </h1>
                <h2 className={`intro-subtext ${stage >= 2 ? 'visible' : ''}`}>
                The Journey Begins Now
                </h2>
                
                <div className={`button-container ${stage >= 3 ? 'visible' : ''}`}>
                <button className="enter-button" onClick={handleEnter}>
                    <span className="button-text">Enter the Realm</span>
                    <div className="button-glow"></div>
                </button>
                </div>
            </div>
            <div className="intro-overlay"></div>
        </div>
      </FloatingLines>
    </div>
  );
};

export default Intro;