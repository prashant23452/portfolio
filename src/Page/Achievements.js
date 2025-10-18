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
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>Coding Contest</h1>
          <p className='text-gray-500 '><span className='font-bold'>Winner – Aavahan Coding Contest (NSEC). </span>Secured 1st place among competitive peers by solving complex algorithmic problems.</p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <RiComputerLine className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>NITDGP Hacks 1.0</h1>
          <p className='text-gray-500 '><span className='font-bold'>Ranked 5th. </span>Achieved 5th position in the <span className='font-bold'>NIT Durgapur 1.0 Coding Contest</span>, competing against top programmers across multiple colleges.</p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <CiMedal className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>LeetCode</h1>
          <p className='text-gray-500 '><span className='font-bold'>Problem Solver. </span>Solved <b>1000+ problems</b> and participated in <b>50+ contests,</b> reaching a <b>maximum contest rating of 1749.</b></p>
        </div>
        <div className='bg-white shadow-md rounded-xl item-center text-center items-center flex flex-col w-full p-10'>
          <FaArrowTrendUp className='text-center text-7xl font-semibold text-[#3c65ff]'/>
          <h1 className='py-10 text-3xl text-gray-700 font-semibold'>GeeksForGeeks</h1>
          <p className='text-gray-500 '><span className='font-bold'>Top Performer.</span> Solved <b>600+ coding problems</b> and earned an <b>Institute Rank of 65</b> among <b>3,300+ registered users.</b></p>
        </div>
      </div>

    </section>
  )
}

export default Achievements