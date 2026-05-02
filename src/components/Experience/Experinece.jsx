import React from 'react'
import '../Experience/Experience.css'

const experiences = [
    {
        company: "Sweya AI",
        location: "Visakhapatnam, India",
        image : "https://sweya.ai/favicon.ico",
        entries: [
          {
            role: "Machine Learning Intern",
            type: "Internship",
            start: "May 2025",
            end: "Jul 2025",
            bullets: [
              "Contributed to a computer vision project for COW UNIQUE IDENTIFICATION POC while explicitly improving skills in real-world ML deployment.",
              "Worked on ML workflows and experimented with structured data for practical business use cases.",
              "Gained experience with model evaluation, error reduction, and continuous improvement of deployed ML modules."
            ]
          },
          {
            role: "Machine Learning (Part-time)",
            type: "Part-time",
            start: "Jul 2025",
            end: "Present",
            bullets: [
              "Gaining hands-on experience with cutting-edge AI technologies including Agentic AI, Generative AI, and tool-using agents.",
              "Learning and applying frameworks such as LangChain and LangGraph for building stateful and agent-driven workflows.",
              "Continuing to support the team part-time by applying new learnings from internship into ongoing projects."
            ]
          }
        ]
      }
      
]

const Experience = () => {
  return (
    <div id='experience' className='experience-section'>
         <h2 className='h1'>Experience</h2>
        <p className='p' style={{marginBottom: "20px"}}><span className='quote'>"</span>The only source of knowledge is experience<span className='quote'>"</span></p>

      <div className='experience-wrapper'>
       
        {experiences.map((exp, idx) => (
          <div key={idx} className='experience-card'>
            <div className='experience-header'>
              <div className='experience-company'>
                <img className='experience-logo' src={exp.image} alt={exp.company} />
                <h3 className='experience-company-name'>{exp.company}</h3>
              </div>
              <span className='experience-location'>{exp.location}</span>
            </div>
            <div className='experience-entries'>
              {exp.entries.map((e, i) => (
                <div key={i} className='experience-entry'>
                  <div className='experience-entry-header'>
                    <strong className='experience-role'>{e.role}</strong>
                    <span className='experience-type'>{e.type}</span>
                    <span className='experience-dates'>{e.start} – {e.end}</span>
                  </div>
                  {e.bullets && (
                    <ul className='experience-bullets'>
                      {e.bullets.map((b, j) => (
                        <li className='experience-bullet' key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience