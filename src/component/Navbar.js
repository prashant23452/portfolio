import React from 'react'
import { FaLinkedin, FaGithub, } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
export default function Navbar() {
    return (
        <nav className='flex flex-col justify-between items-center md:flex-row my-5 p-5'>
            <div>
                <Link className='text-[#3c65ff] text-4xl cursor-pointer font-semibold' to="about" smooth={true} duration={500}>PK</Link>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5 pt-3 md:pt-0'>
                <div className='flex gap-3'>
                    <Link className='text-gray-700 text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="about" smooth={true} duration={500}>About me</Link>
                    <Link className='text-gray-700 text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="skills" smooth={true} duration={500}>Skills</Link>
                    <Link className='text-gray-700 text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="projects" smooth={true} duration={500}>Projects</Link>
                    <Link className='text-gray-700 text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="experience" smooth={true} duration={500}>Experience</Link>
                    <Link className='text-gray-700 text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="contact" smooth={true} duration={500}>Achievements</Link>
                </div>
                <div className='flex gap-1'>
                    <a className='text-gray-700 text-lg ' target="_blank" 
  rel="noopener noreferrer" href='https://www.linkedin.com/in/prashant-kumar-jha-293967198/'><FaLinkedin className='text-[#3c65ff] text-3xl'/></a>
                    <a className='text-gray-700 text-lg ' target="_blank" 
  rel="noopener noreferrer" href='https://github.com/prashant23452'><FaGithub className='text-[#3c65ff] text-3xl'/></a>
                    <a className='text-gray-700 text-lg ' target="_blank" 
  rel="noopener noreferrer" href='https://x.com/Prashan49241542'><FaSquareXTwitter className='text-[#3c65ff] text-3xl'/></a>
                </div>
            </div>
            
        </nav>
    )
}

