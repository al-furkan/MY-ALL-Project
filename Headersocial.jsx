import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'
const Headersocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default Headersocial;