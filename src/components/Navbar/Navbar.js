import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { BsFillHouseFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <button className='btn'>Sign In</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<MdClose className='icon' />) : (<HiMenu className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar 