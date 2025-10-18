import React from 'react'
import { SlTrophy } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { CiMedal } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";

function Achievements() {
  return (
    <section id="achievements" className='my-20 mx-20'>
      <div className='h-100 bg-[#7f2fff] rounded-xl'>
        <h1 className='py-20 text-white text-center text-5xl font-semibold'>Achievements</h1>
      </div>
      <div className='flex -mt-50 justify-between gap-10 px-20'>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <SlTrophy className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>DoeWeb</h1>
          <p className='text-gray-500 '><span className='font-bold'>Employee of the month.</span> Though I was only an intern, I was highly praised at work and given promotion.</p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <RiComputerLine className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>Hackathon</h1>
          <p className='text-gray-500 '><span className='font-bold'>Employee of the month.</span> Though I was only an intern, I was highly praised at work and given promotion.</p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <CiMedal className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>Awwwards</h1>
          <p className='text-gray-500 '><span className='font-bold'>Employee of the month.</span> Though I was only an intern, I was highly praised at work and given promotion.</p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <FaArrowTrendUp className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>Web Summit</h1>
          <p className='text-gray-500 '><span className='font-bold'>Employee of the month.</span> Though I was only an intern, I was highly praised at work and given promotion.</p>
        </div>
      </div>

    </section>
  )
}

export default Achievements