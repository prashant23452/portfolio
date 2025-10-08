import React from 'react'

function About() {
  return (
    <section id="about" className='border-box mx-auto text-center mt-20'>
      <h1 className='text-5xl font-bold text-gray-800'>Prashant Kumar Jha</h1>
      <p className='mx-auto w-2/3 text-gray-600 text-lg mt-10 p-5'>I’m a Full Stack Developer skilled in the MERN stack, focused on writing clean, efficient, and scalable code.
        With more than 1500 DSA problems solved, I’ve built a strong foundation in algorithms and problem-solving.
        I enjoy transforming ideas into functional products through logic and design.
        Constantly learning, improving, and building — that’s the mindset I live by.</p>
      <div className='mt-8 w-70 h-70 mx-auto item-center rounded-full'>
        <img src="https://developer-cv.weblium.site/res/5d01f2b4b788170023f2a832/5d0756c53cf8440024cca0fd_optimized_1140" alt="GitHub Logo" />
      </div>
    </section>
  )
}

export default About