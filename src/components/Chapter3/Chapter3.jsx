import React from 'react'
import '../Chapter3/Chapter3.css'

const tools = [
  {
    "name": "Python",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    "name": "Java",
    "image": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  },
  {
    "name": "HTML",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
  },
  {
    "name": "CSS",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
  },
  {
    "name": "JavaScript",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
  {
    "name": "React",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    "name": "Django REST Framework",
    "image": "src/assets/drf.png"
  },
  {
    "name": "FastAPI",
    "image": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
  },
//   {
//     "name": "SQL",
//     "image": "https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
//   },
//   {
//     "name": "PostgreSQL",
//     "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
//   },
  {
    "name": "LangChain",
    "image": "https://avatars.githubusercontent.com/u/126733545?s=200&v=4"
  },
  {
    "name": "LangGraph",
    "image": "src/assets/langgraph-color.svg"
  },
  {
    "name": "Git & GitHub",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
  },
//     {
//     "name": "Firebase",
//     "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
//   },
//   {
//     "name": "Material UI",
//     "image": "https://mui.com/static/logo.png"
//   },
//   {
//     "name": "React Bits",
//     "image": "https://reactbits.dev/favicon.ico"
//   },
//   {
//     "name": "Postman",
//     "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png"
//   }
]


const Chapter3 = () => {
  return (
    <div className='chapter-container'>
        <h1 className='h1'>Chapter 3</h1>
        <p className='p'>The Tools I Collected</p>

        <div className="tools">
            {tools ? tools.map((tool) => (
                <div className="tool">
                    <img src={tool.image} alt={tool.name} />
                    <h2>{tool.name}</h2>
                </div>
            )) : <div></div>}
        </div>

        <p style={{marginTop : "60px"}} className='p'><span className='quote'>"</span>I don't collect tools. I use what solves the problem best<span className='quote'>"</span></p>
    </div>
  )
}

export default Chapter3