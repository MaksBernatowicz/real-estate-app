import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { SiCodewars, SiLinkedin } from 'react-icons/si'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="social">
                <a className='icon' href='https://github.com/MaksBernatowicz' target="_blank"><FaGithub /></a>
                <a className='icon' href='https://www.linkedin.com/in/maksymilian-bernatowicz/' target="_blank"><SiLinkedin /></a>
                <a className='icon' href='https://www.codewars.com/users/MaksBernatowicz' target="_blank"><SiCodewars /></a>
            </div>
        </div>
    )
}

export default Footer