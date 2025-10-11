import React from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { IoIosGitNetwork } from "react-icons/io";
import { TbCircleTriangle } from "react-icons/tb";

function Skills() {
  return (
    <section id="skills" className="mt-18 w-full px-18 relative  ">
      
      <div className="rounded-xl w-full h-100   bg-[#7f2fff]">
        <h1 className='text-white mx-auto text-5xl font-semibold text-center py-16'>Skills</h1>
      </div>
      
      <div className="w-full  flex justify-between items-center gap-8 px-24 -mt-55 relative z-10">
        
        <div className="w-full bg-white rounded-xl mx-auto text-center border-gray-300 shadow-md p-10 pb-4 flex flex-col items-center">
          <IoIosGitNetwork className='text-5xl text-[#3c65ff] rotate-270'/>
          <h1 className='text-black-900 font-bold text-2xl py-5 text-center'>Back-end Developer</h1>
          <p className='text-gray-600 pb-5 text-center'>Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>Languages:</h1>
          <p className='text-gray-600 py-5 text-center'>PHP, Python, Ruby, Java, Perl</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>My Tools:</h1>
          <ul className='text-gray-600 py-5 space-y-5 text-center'>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="w-full bg-white rounded-xl mx-auto text-center border-gray-300 shadow-md p-10 pb-4 flex flex-col items-center">
          <IoCodeSlash className='text-5xl text-[#3c65ff] '/>
          <h1 className='text-black-900 font-bold text-2xl py-5 text-center'>Back-end Developer</h1>
          <p className='text-gray-600 pb-5 text-center'>Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>Languages:</h1>
          <p className='text-gray-600 py-5 text-center'>PHP, Python, Ruby, Java, Perl</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>My Tools:</h1>
          <ul className='text-gray-600 py-5 space-y-5 text-center'>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="w-full bg-white rounded-xl mx-auto text-center border-gray-300 shadow-md p-10  pb-4 flex flex-col items-center">
          <TbCircleTriangle className='text-5xl text-[#3c65ff] '/>
          <h1 className='text-black-900 font-bold text-2xl py-5 text-center'>Back-end Developer</h1>
          <p className='text-gray-600 pb-5 text-center'>Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>Languages:</h1>
          <p className='text-gray-600 py-5 text-center'>PHP, Python, Ruby, Java, Perl</p>
          <h1 className='text-[#7f2fff] text-xl py-4 text-center'>My Tools:</h1>
          <ul className='text-gray-600 py-5 space-y-5 text-center'>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
      </div>
      <div className='w-full my-20   mx-auto text-center'>
          <a href='/resume.pdf' download className=' bg-[#7f2fff] hover:bg-[#6920e6] p-5 rounded-lg font-semibold text-white'>Here is My Resume</a>
      </div>
      
    </section>
  );
  
}

export default Skills