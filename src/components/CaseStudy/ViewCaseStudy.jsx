import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ViewCaseStudy.css'

const projects = [
    {
      id : 1,
      projectOverview : "Classroom Hub is a web application that centralizes classroom communication by combining a Django backend with a JavaScript/CSS frontend. It provides a structured space for creating, storing, and accessing classroom posts and related media",
      problem : "Students often miss important announcements and resources because they are scattered across multiple channels like WhatsApp, email, and PDFs. This fragmentation makes it hard to track updates and revisit past information efficiently.",
      solution : "Classroom Hub offers a single platform where posts, updates, and resources can be created and managed through a Django-powered backend, with data stored in a local SQLite database. The JavaScript and CSS-heavy frontend (over 80% of the codebase) delivers an interactive interface for viewing and interacting with posts and media.",
      challenges : [
        "1. Designing a consistent integration between the Django backend (Python) and a largely JavaScript/CSS-based UI structure.",
        "2. Managing file uploads and media storage for posts under the media/posts directory while keeping the project lightweight and easy to run.",
        "3. Building the project without a detailed README meant that documenting architecture, APIs, and workflows had to be inferred directly from the codebase"
      ],
      outcome : "The result is a functional classroom hub that uses Django for routing, models, and persistence (wtPbl, posts, db.sqlite3), while leveraging JavaScript and CSS for the majority of the UI. The project serves as a solid foundation that can be extended with features like role-based access, comments, and richer APIs through the existing api app.\nFor Login use this credentials - Username - 22331a0526, password - 12345678",
      title :"Classroom Hub",
      description :"A collaborative platform for classroom discussions, events, and knowledge sharing.",
      image: "/src/assets/p5.png",
      tags: ["React JS","Django rest Framework API's", "Sqlite"],
      siteLink: "https://krishnamohan-classroom-hub.netlify.app/",
      codeLink: "https://github.com/Mohan5488/classroom_hub",
    },
    {
      id : 2,
      projectOverview : "Multichannel Agent is a LangGraph-based multi‑agent system that routes a single user prompt into either an email workflow or a LinkedIn posting workflow, with a full human‑in‑the‑loop review before anything is sent. It uses a Python backend (agent graph, nodes, tools) with a small frontend folder for running and interacting with the agent.",
      problem : "Professionals often need to send similar content across channels (email, LinkedIn) but manually rewriting, filling recipients, and double‑checking every detail is time‑consuming and error‑prone. LLMs can draft content, but naïvely auto‑sending from them is risky because of missing info, wrong recipients, or bad tone",
      solution : "The project defines a LangGraph workflow where user input passes through intent detection, content extraction, and human approval nodes before any action is executed. It directly integrates with SMTP for sending emails and the LinkedIn API for posting, while maintaining a simplified 11‑field state schema to keep the agent logic transparent and debuggable",
      challenges : [
        "1. Designing clear workflow nodes (intent, compose email, compose LinkedIn, human gate, send, post, chat, tools, end) and routing between them in graph.py.",
        "2. Ensuring reliable human‑in‑the‑loop behavior: pausing when information is missing, letting the user edit previews, then resuming execution",
        "3. Handling external service issues: OpenAI API key errors, SMTP/LinkedIn failures, and dependency/env setup, all with graceful fallbacks and explicit error propagation in the state"
      ],
      outcome : "The result is a working multi‑channel assistant that can take natural‑language instructions like “send this update to my manager and also post a short version on LinkedIn” and guide them through a safe, reviewable pipeline. The clean project structure (agent state, graph, nodes, tools, plus clear README and troubleshooting guides) makes it easy to extend with new channels (e.g., Slack, WhatsApp) by adding new intent types and nodes as described in the “Adding New Channels” section",
      description: "A LangGraph-based AI agent that sends emails, posts to LinkedIn, chats, and performs web searches—all from a single prompt",
      image: "/src/assets/p16.png",
      tags: ["Python", "LangGraph", "LangChain", "Google API's"],
      title :"Multichannel Agent",
      codeLink: "https://github.com/Mohan5488/Multi-channel-agent",
    },
    {
      id : 3,
      projectOverview : "FaceRecognition is a web-based face recognition system that uses deep learning–based face encodings and Euclidean distance to identify people, wrapped in a Django/JS/CSS interface for uploading images and visualizing results. It builds on your earlier cow nose print project but adapts the pipeline specifically for human faces with more robust embeddings",
      problem : "Traditional ORB + KNN pipelines that worked for cow nose prints perform poorly on human faces due to high variation in pose, lighting, expression, and appearance. Classical Haar cascades and binary descriptors also fail to capture the semantic identity features needed for reliable human face recognition in real-world conditions",
      solution : "This project switches to the face_recognition library to generate 128‑dimensional face encodings and compares them using simple Euclidean distance with a threshold instead of SVM/KNN classifiers. You provide training and testing scripts that extract encodings, save them (encodings.npy, labels.pkl), and then load them to recognize faces in new images, labelling them as a known ID or “Unknown.”",
      challenges : [
        "1. Handling higher intra-class variation in human faces while avoiding overcomplicated models, which required choosing robust embeddings and a good distance threshold (e.g., 0.6).",
        "2. Integrating the Python recognition logic with the Django/static front end (templates, static, assets) so users can upload images and see annotated outputs saved under output and output_faces",
        "3. Managing data cleanly (only storing encodings and label IDs, not raw images) and keeping the project portable with a lightweight SQLite database"
      ],
      outcome : "The outcome is a working face recognition system that can distinguish known individuals from unknown ones and visually annotate results with bounding boxes and labels on images. The modular structure (training scripts, recognition pipeline, stored encodings, and a web layer) makes it easy for you to scale the dataset, plug into other applications, or extend it with video streams or real-time attendance systems",
      title:"Face Recognition",
      description: "Deep learning-based face recognition using encodings and Euclidean distance.",
      image:"/src/assets/p10.png",
      tags : ["Python", "OpenCV", "face_recognition", "Computer Vision"],
      codeLink: "https://github.com/Mohan5488/FaceRecognition",
    },
    {
      id : 4,
      projectOverview : "Textbook Assistant is an advanced AI-powered educational platform designed to transform static PDF textbooks into interactive, personalized 'Study Rooms.' By leveraging Large Language Models (LLMs) and Vector Databases (RAG), it allows students to engage with their reading materials as if they were conversing with a tutor, complete with adaptive quizzes and progress tracking.",
      problem : "Traditional learning from digital textbooks is often passive and inefficient. Students face several core issues like 1. Dense textbooks make it difficult to quickly locate specific concepts or answers, 2. if one has truly understood a section is hard without immediate assessment, 3. Reading long PDFs on a screen can be monotonous, leading to lower retention",
      solution : "The project implements a full-stack solution that turns these static documents into dynamic learning experiences. The core experience centers on Intelligent 'Study Rooms' where users can chat with their textbooks, guided by an adaptive learning flow that moves beyond simple Q&A to structured topic mastery. Technically, this is achieved through a responsive React frontend and a robust Django backend that handles PDF processing and Vector Search (FAISS). The system utilizes a complex AI Agent Workflow (LangGraph) to manage the student's journey from topic selection to retrieval and quiz generation, serving as a comprehensive 24/7 AI tutor",
      challenges : [
        "1. Implementing a complex state machine (LangGraph) to accurately track where a student is in their learning journey (e.g., distinguishing between a general query and specific subtopic mastery) requires meticulous design.",
        "2. Developing precise chunking strategies and tuning vector search parameters is critical to ensure every AI response is strictly grounded in the textbook content and free from hallucinations.",
        "3. Calculating high-quality, context-aware AI responses and generating quizzes is computationally expensive, necessitating asynchronous processing (using Redis/Celery) to maintain a responsive user interface."
      ],
      outcome : "The result is a functional, scalable MVP (Minimum Viable Product) that successfully democratizes personal tutoring for any uploaded textbook. It explicitly verifies learning through generated quizzes and visualizes progress via a dashboard, effectively bridging the gap between traditional rigorous content and modern interactive expectations",
      title:"Textbook Assistant",
      description: "AI-powered educational platform that turns static PDFs into interactive study rooms with RAG and LangGraph.",
      image:"/src/assets/p11.png",
      tags : ["Python", "Django", "LangGraph", "RAG", "Redis", "Celery", "FAISS", "LLM"],
      currentStatus : "ongoing"
    },
    {
      id: 5,
      projectOverview: "This project addresses the issue of cattle identification using biometric data—specifically, muzzle prints (nose prints), which are unique to every cow similar to human fingerprints. By leveraging machine learning and computer vision techniques, the system allows for the identification of lost or stolen cattle and retrieves the owner's details.",
      problem: "Traditional methods of cattle identification, such as ear tagging or branding, are invasive, can be tampered with, or lost. Farmers face significant financial losses due to cattle theft or difficulties in reclaiming lost livestock without a reliable, immutable method of identification.",
      solution: "Developed a web-based platform using Django that integrates a machine learning pipeline for muzzle print recognition. The system uses OpenCV for image processing (ORB feature extraction) and machine learning classifiers (KNN/SVM) to match uploaded muzzle images against a registered database. Farmers can register their cattle's prints and contact details, and anyone finding a lost cow can scan its nose print to find the owner.",
      challenges: [
        "1. Preprocessing cattle muzzle images to handle varying lighting conditions, dirt, and angles to ensure reliable feature extraction.",
        "2. Implementing the ORB (Oriented FAST and Rotated BRIEF) algorithm and tuning the matching logic to differentiate between similar-looking prints effectively.",
        "3. Integrating the Python-based ML processing seamlessly with the Django backend to provide real-time identification results to the user."
      ],
      outcome: "Successfully created a functional prototype (POC) that demonstrates non-invasive biometric identification for cattle. The system allows for the registration and retrieval of farmer details via muzzle print scanning, offering a modern solution to livestock management and theft prevention.",
      title: "Cow Identification",
      description: "An AI-based system trained on cow images to identify lost cows and retrieve farmer details.",
      image: "/src/assets/p15.png",
      tags: ["Python", "Django", "ML", "OpenCV", "internship"],
      codeLink: "https://github.com/Mohan5488/Cow_detection",
    },
    {
      id: 6,
      projectOverview: "This is a React-based video streaming web app that mimics core YouTube features: category-based home feed, video detail page with stats, channel info, comments, and recommended videos. It uses React Router and an external API to fetch video, channel, and comment data dynamically.",
      challenges: [
        "1. Implementing dynamic routing with useParams() and ensuring the correct IDs are used to trigger multiple API calls on the video page.",
        "2. Structuring API calls to fetch different resources (video details, channel info, comments, recommendations) efficiently without blocking the UI.",
      ],
      outcome: "The result is a functional YouTube-style SPA with a clear component architecture (Home, SideBar, Feed, Video, PlayVideo) that demonstrates modern React patterns (state, effects, routing). The README and Flow.txt document the flow well, and the project is ready for enhancements like search, auth-based personalization, and dark mode as listed in the future improvements section.",
      title: "Youtube Clone",
      description: "A React-based video streaming web app that mimics core YouTube features: category-based home feed, video detail page with stats, channel info, comments, and recommended videos.",
      image: "/src/assets/p3.png",
      tags: ["React", "Google API"],
      codeLink: "https://github.com/Mohan5488/Youtube_clone",
      siteLink: "https://krishnamohan-youtube-clone.netlify.app/",
    },
    {
      id: 7,
      projectOverview: "This project is a web-based Electronic Health Record Management System (EHRMS) that helps healthcare providers manage patient records digitally. It focuses on storing, updating, and viewing patient information in a structured and secure way through a browser.",
      problem: "Many clinics and hospitals still depend on paper files or scattered digital documents, which makes it hard to quickly access patient history, track treatments, or maintain accurate records. This leads to delays, duplicate tests, and a higher chance of human error in managing health data.",
      solution: "The system provides an interface where authorised users can log in and manage patient details, medical history, and other health-related information in a single place. All the data is stored in a properly designed database, so records are easier to search, update, and maintain compared to manual or unstructured methods.",
      challenges: [
        "1. Deciding what patient and medical information is essential and how to organise it logically in the database.",
        "2. Designing screens and flows so that healthcare staff can navigate from login to patient records and summaries without confusion.",
        "3. Connecting the web interface with the underlying database in a way that still clearly demonstrates core DBMS and healthcare data concepts."
      ],
      outcome: "The result is a working EHR management prototype that shows how hospitals or clinics can digitise patient records using a database-backed web application. It is a strong academic and portfolio project that can be extended with features like role-based access (doctor/nurse/admin), appointment tracking, reports, and audit logs for medical data.",
      title: "Electronic Health Record Management System",
      description: "A React-based video streaming web app that mimics core YouTube features: category-based home feed, video detail page with stats, channel info, comments, and recommended videos.",
      image: "/src/assets/p1.png",
      tags: ["Django", "PostgreSQL","Html","Css","JS"],
      codeLink: "https://github.com/Mohan5488/Dbms_EHRMS_pbl",
    },
    {
      id:8,
      projectOverview: "This project is a Django-based web application designed to download videos from YouTube. It serves as a local video archiver where users can input a YouTube channel or video URL, and the system automatically fetches the content in the highest available quality. The application provides a user-friendly interface to trigger downloads and lists all downloaded files directly on the webpage for easy access and playback",
      problem: "Many users struggle to find reliable, ad-free methods to save YouTube videos for offline viewing or archival purposes. Online downloader websites are often filled with invasive ads and limitations on video quality, while powerful command-line tools like yt-dlp can be too technical and difficult for the average user to navigate. This creates a need for a solution that combines the power of professional archiving tools with the simplicity of a web form",
      solution: "To address this, the application wraps the powerful yt-dlp library within a Django web framework. The backend manages the complexities of negotiating with YouTube's servers, selecting the best video and audio streams, and merging them into a high-quality file. Users interact with a clean, simple HTML interface where they paste a link and click 'Download', bypassing the need for terminal commands or sketchy third-party sites",
      // challenges: [
      //   "1. ",
      //   "2. ",
      //   "3. "
      // ],
      outcome: "The result is a robust, self-hosted video downloader tool that successfully bridges the gap between technical capability and user accessibility. It allows users to build a local library of high-definition content with minimal effort, providing a reliable alternative to streaming that respects the user's need for offline access and content preservation",
      title: "Bulk YouTube Video Downloader",
      description: "A tool that allows you to download all videos from a YouTube channel just by providing the channel link.",
      image: "/src/assets/p2.png",
      tags: ["Django", "PostgreSQL","Html","Css","JS"],
      codeLink: "https://github.com/Mohan5488/youtube_videos_downloaders",
    }
]

const ViewCaseStudy = () => {
  const {id}= useParams()

  return (
    <div className='project-container'>
      {projects.filter((project) => project.id == id).map((project) => {
        return(
          <>
            <div className="upper-side">
              <div className="left">
                <img src={project.image} alt="project-image" />
              </div>
              <div className="right">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                {project.tags.map((tag, index) => {
                  return(
                    <span key={index} className={tag.toLowerCase() === 'internship' ? 'tag-internship' : ''}>{tag}</span>
                  )
                })}
                {project.currentStatus === "ongoing" && 
                  <p className="status-ongoing">Status - Ongoing</p>
                }
              </div>
            </div>
            <div className="lower-side">

              <p>Overview - {project.projectOverview}</p>
              {project.problem && <>
                <h2>Problem</h2>
                <p>{project.problem}</p>
              </>}
              {project.solution && <>
                <h2>Solution</h2>
                <p>{project.solution}</p>
              </>}
              {project.challenges && <>
                <h2>Challenges</h2>
                {project.challenges.map((challenge, index) => (
                  <p key={index}>{challenge}</p>
                ))}
              </>}
              {project.outcome && <>
                <h2>Outcome</h2>
                <p>{project.outcome}</p>
              </>}
              {project.siteLink && <Link to={project.siteLink}><button>View Site</button></Link>}
              {project.codeLink ? <Link to={project.codeLink}><button>View Code</button></Link> : <p style={{fontWeight: "bold", fontSize: "1.4rem"}}>Code is not public</p>}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default ViewCaseStudy