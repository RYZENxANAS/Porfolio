import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className=' flex items-center justify-between '>
        <div className='flex flex-shrink-0 items-center'>

          <h1 className='m-10 text-4xl'>SA</h1>
        
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <FaLinkedin/>
          <FaGithub/>
          <FaInstagram/>
          <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Nav