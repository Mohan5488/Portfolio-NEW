import React from 'react'
import DomeGallery from '../../ReactBits/DomeGallery/DomeGallery'
import './Projects.css'

const projects = [
    {
    title :"Classroom Hub",
    description :"A collaborative platform for classroom discussions, events, and knowledge sharing.",
    image: "/src/assets/p5.png",
    tags: ["React","Django rest Framework", "Sqlite"],
    link: "/view-case-study/1"
  },
  {
    title: "Multi-channel Agent",
    description: "A LangGraph-based AI agent that sends emails, posts to LinkedIn, chats, and performs web searches—all from a single prompt",
    image: "/src/assets/p16.png",
    tags: ["Python", "LangGraph", "LangChain", "Google API's"],
    link: "/view-case-study/2"
  },
  {
    title:"Face Recognition",
    description: "Deep learning-based face recognition using encodings and Euclidean distance.",
    image:"/src/assets/p10.png",
    tags : ["Python", "OpenCV", "face_recognition", "Computer Vision"],
    link: "/view-case-study/3"
  },
  {
    title:"Textbook Assistant",
    description: "AI-powered educational platform that turns static PDFs into interactive study rooms with RAG and LangGraph.",
    image:"/src/assets/p11.png",
    tags : ["Python", "Django", "LangGraph", "RAG", "Redis", "Celery", "FAISS", "LLM"],
    link: "/view-case-study/4"
  },
  {
    title: "Internship - Cow unique Identification",
    description: "An AI-based system trained on cow images to identify lost cows and retrieve farmer details, helping reunite them with their owners.",
    image: "/src/assets/p15.png",
    tags: ["Python", "Django", "ML",'OpenCV', "internship"],
    codeLink: "https://github.com/Mohan5488/Cow_detection",
    link: "/view-case-study/5"
  },
  {
    title: "YouTube Clone",
    description: "This project was a fantastic opportunity to dive deeper into building real-world applications, focusing on user interaction, responsive design, and API handling.",
    image: "/src/assets/p3.png",
    tags: ["React","Google API"],
    siteLink: "https://krishnamohan-youtube-clone.netlify.app/",
    codeLink: "https://github.com/Mohan5488/Youtube_clone",
    link: "/view-case-study/6"
  },
  {
    title: "Bulk YouTube Video Downloader",
    description: "A tool that allows you to download all videos from a YouTube channel just by providing the channel link.",
    image: "/src/assets/p2.png",
    tags: ["Django", "PostgreSQL","Html","Css","JS"],
    codeLink: "https://github.com/Mohan5488/youtube_videos_downloaders",
    link: "/view-case-study/8"
  }, 
  {
    title: "EHR Management System",
    description: "A digital platform for patients and doctors to manage health records efficiently.",
    image: "/src/assets/p1.png",
    tags: ["Django", "PostgreSQL","Html","Css","JS"],
    codeLink: "https://github.com/Mohan5488/Dbms_EHRMS_pbl",
    link: "/view-case-study/7"
  }
]

const Projects = () => {
  return (
    <div className='projects-container'>
        <DomeGallery images={projects} openedImageWidth="400px" openedImageHeight="auto" />
    </div>
  )
}

export default Projects