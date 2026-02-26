import React from 'react'
import '../Chapter4/Chapter4.css'
import { Link } from 'react-router-dom'

const projects = [
  {
    title :"Classroom Hub",
    description :"A collaborative platform for classroom discussions, events, and knowledge sharing.",
    image: "src/assets/p5.png",
    tags: ["React","Django rest Framework", "Sqlite"],
    link: "/view-case-study/1"
  },
  {
    title: "Multi-channel Agent",
    description: "A LangGraph-based AI agent that sends emails, posts to LinkedIn, chats, and performs web searches—all from a single prompt",
    image: "src/assets/p16.png",
    tags: ["Python", "LangGraph", "LangChain", "Google API's"],
    link: "/view-case-study/2"
  },
  {
    title : "Textbook Assistant",
    description: "AI-powered educational platform that turns static PDFs into interactive study rooms with RAG and LangGraph.",
    image:"src/assets/p11.png",
    tags : ["Python", "Django", "LangGraph", "RAG", "Redis", "Celery", "FAISS", "LLM"],
    link: "/view-case-study/4"
  }
]

const Chapter4 = () => {
  return (
    <div className='chapter-container'>
        <h1 className='h1'>Chapter 4</h1>
        <p className='p'>Problem worth solving</p>
        
        <div className='projects'>
            {
                projects.map((project, index) => (
                    <div className='project' key={index}>
                        <div className="upper-part">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="lower-part">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            {project.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                            <Link to={project.link}><button>View Case Study</button></Link>
                        </div>
                    </div>
                ))
            }
        </div>

        <Link to='/projects' style={{textDecoration: 'none', color: 'white'}}><button className='view-more'>View More ↓</button></Link>
    </div>
  )
}

export default Chapter4