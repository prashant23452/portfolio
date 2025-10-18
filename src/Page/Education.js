import React from 'react'

function Education() {
  return (
    <section id="education" className='bg-gray-100/30'>
        <div className='w-3/4 text-center py-20 items-center flex flex-col mx-auto'>
            <h1 className='text-5xl text-gray-800 font-semibold'>Education</h1>
            <div className='flex gap-10 justify-between w-full pt-10'>
                <div className='bg-white shadow-md rounded-xl text-center flex flex-col items-center flex-1 p-10'>
                    <h1 className='text-2xl text-gray-800 font-semibold '>Bachelor Of Technology</h1>
                    <h1 className='text-[#7f2fff] text-xl py-5'>2022-2026</h1>
                    <h1 className='text-gray-600'>Netaji Subhash Engineering College<br/><i>New Garia, Kolkata</i></h1>
                    <h1 className='py-5 text-xl text-[#7f2fff]'>CGPA  :  8.60</h1>
                </div>
                <div className='bg-white shadow-md rounded-xl text-center flex flex-col items-center flex-1 p-10'>
                    <h1 className='text-2xl text-gray-800 font-semibold '>Senior Secondary</h1>
                    <h1 className='text-[#7f2fff] text-xl py-5'>2019-2021</h1>
                    <h1 className='text-gray-600'>Mother Teresa Academy<br/><i>Benipur, Darbhanga</i></h1>
                    <h1 className='py-5 text-xl text-[#7f2fff]'>Score  :  91.20%</h1>
                </div>
                <div className='bg-white shadow-md rounded-xl text-center flex flex-col items-center flex-1 p-10'>
                    <h1 className='text-2xl text-gray-800 font-semibold '>Secondary</h1>
                    <h1 className='text-[#7f2fff] text-xl py-5'>2017-2019</h1>
                    <h1 className='text-gray-600'>Mother Teresa Academy<br/><i>Benipur, Darbhanga</i></h1>
                    <h1 className='py-5 text-xl text-[#7f2fff]'>Score  :  90.00%</h1>
                </div>
            </div>
        </div>
        {/* <a href="mailto:prashantkumarjha.cse2022@nsec.ac.in" className="text-blue-600 hover:underline">
  youremail@gmail.com
</a> */}
    </section>
  )
}

export default Education