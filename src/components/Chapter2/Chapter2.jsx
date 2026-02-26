import React from 'react'
import '../Chapter2/Chapter2.css'
import LightRays from '../../ReactBits/LightRays/LightRays'

const Chapter2 = () => {
  return (
    <LightRays>
        <div id='chapter' className='chapter2-dashboard'>
            <h1 className='h1'>Chapter 2</h1>
            <p className='p'>Where It All Begin</p>

            <ul>
                <li>My journey didn’t start with mastering tools,
    but with understanding problems.</li>
                <li>As I explored real-world applications,
    I realized technology isn’t about code—
    it’s about clarity, structure, and impact</li>
                <li>That mindset shaped everything I built next.</li>
            </ul>
        </div>
    </LightRays>
  )
}

export default Chapter2