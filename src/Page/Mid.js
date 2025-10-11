import React from 'react'
import { Link } from 'react-scroll';
function Mid() {
  return (
    <div className='text-center text-white w-full h-90 mt-20 my-10 bg-gradient-to-r from-[#7f2fff] to-[#3c65ff]'>
        <h1 className='pt-16 text-5xl font-semibold'>Interested in working together?</h1>
        <p className='pt-8 w-1/2 mx-auto text-lg text-center'>You can trust your project in my expert hands. I'm always eager to do something nice and complicated. Let's discuss all the features in a private conversation.</p>
        
        <div className='pt-10'>
            <Link to="contact" smooth={true} duration={500}  className='cursor-pointer py-3 px-8 rounded-lg bg-white text-[#3c65ff] shadow-lg'>Contact Me</Link>
        </div>
    </div>
  )
}

export default Mid