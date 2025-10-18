import React from 'react'

function Experience() {
  return (
    <section id="experience" className='w-3/4 mx-auto text-center mt-20'>
      <div className='mb-10'>
        <h1 className='text-5xl font-semibold text-gray-800'>Experience</h1>
      </div>
      <div className='relative flex w-full justify-between mt-20'>
        <div className='flex w-full justify-between mr-10 '>
          <div className='absolute h-24 w-26 bg-gray-100 rounded-full flex justify-center items-center'>
            <p className='text-2xl font-bold text-gray-700'>2015</p>
          </div>
          <div className='text-left pl-30'>
            <h className="text-[#7f2fff] text-xl font-bold mb-5">MIT</h>
            <p className='text-lg text-gray-500'>Undergraduate Project in Computer Science and Engineering, A+</p>
          </div>
        </div>
        <div className='flex w-full justify-between mr-10 '>
          <div className='absolute h-24 w-26 bg-gray-100 rounded-full flex justify-center items-center'>
            <p className='text-2xl font-bold text-gray-700'>2015</p>
          </div>
          <div className='text-left pl-30'>
            <h className="text-[#7f2fff] text-xl font-bold mb-5">University of Boston</h>
            <p className='text-lg text-gray-500'>Bachelor of Science in Computer Science. Courses in programming languages, compiler design, data structures, algorithms, data structures, theory of computation. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience