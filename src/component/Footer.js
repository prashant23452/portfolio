import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <section id="contact" className="bg-[#7f2fff] text-white mt-4 ">
      <div className="mx-auto text-center items-center py-16">
        <h1 className="text-4xl font-semibold">Prashant Kumar Jha</h1>
        <div className='flex gap-3 pt-10 justify-center'>
          <Link className='text-white text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="about" smooth={true} duration={500}>About me</Link>
          <Link className='text-white text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="skills" smooth={true} duration={500}>Skills</Link>
          <Link className='text-white text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="projects" smooth={true} duration={500}>Projects</Link>
          <Link className='text-white text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="experience" smooth={true} duration={500}>Experience</Link>
          <Link className='text-white text-lg cursor-pointer font-semibold hover:text-[#3c65ff]' to="achievements" smooth={true} duration={500}>Achievements</Link>
        </div>
        <div className='flex gap-1 justify-center pt-10'>
          <a className='text-gray-700 text-lg ' target="_blank"
            rel="noopener noreferrer" href='https://www.linkedin.com/in/prashant-kumar-jha-293967198/'><FaLinkedin className='text-white text-3xl' /></a>
          <a className='text-gray-700 text-lg ' target="_blank"
            rel="noopener noreferrer" href='https://github.com/prashant23452'><FaGithub className='text-white text-3xl' /></a>
          <a className='text-gray-700 text-lg ' target="_blank"
            rel="noopener noreferrer" href='https://x.com/Prashan49241542'><FaSquareXTwitter className='text-white text-3xl' /></a>
        </div>
        <div className="flex justify-center gap-10 pt-10">
          <div className="flex justify-center gap-3">
            <IoMdPhonePortrait className='text-white text-3xl' />
            <p className='text-white text-lg '>+91 6205743091</p>
          </div>
          <div className="flex justify-center gap-3">
            <CiMail className='text-white text-3xl' />
            <p className='text-white text-lg '>jhaprashantkumar693@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer