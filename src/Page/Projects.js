import React from 'react'


function Projects() {
  return (
    <section id="projects" className=' mt-50 mx-40'>
      <div className='text-center mx-auto'>
        <h1 className='text-5xl text-gray-800 font-semibold py-10'>Projects</h1>
        <p className='text-gray-700 text-lg pb-10'>Have a look at some of the rolled-out projects I'm proud of:</p>
      </div>
      <div className='grid grid-cols-1 gap-8 '>
        <div className='flex relative justify-between gap-10'>
          <div className='w-1/2 rounded-lg shadow-lg h-100 bg-[#ffc322e6]'>

          </div>
          <div className=' relative rounded-b-lg w-1/2 rounded-lg shadow-xl h-100 bg-white'>
            <div className='absolute w-full left-0 rounded-b-lg bottom-0 bg-[#ffc322e6] h-1 '>

            </div>
          </div>
        </div>
        <div className=' relative flex justify-between gap-10'>
          <div className='w-1/2 rounded-lg shadow-lg h-100 bg-[#5853ff]'>

          </div>
          <div className='w-1/2 relative rounded-lg shadow-xl h-100 bg-white'>
            <div className='absolute w-full left-0 rounded-b-lg bottom-0 bg-[#5853ff] h-1 '>

            </div>
          </div>
        </div>
        <div className='flex relative justify-between gap-10'>
          <div className='w-1/2 rounded-lg shadow-lg h-100 bg-[#ff4d66]'>

          </div>
          <div className='w-1/2 relative border border-gray-200 rounded-lg shadow-xl h-100 bg-white'>
            <div className='absolute w-full left-0 rounded-b-lg bottom-0 bg-[#ff4d66] h-1 '>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects