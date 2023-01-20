import React, { useState } from 'react';
import { Link } from 'react-scroll'
import logo from '../../src/images/logo2.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(1);
    const handleClick = (event) => {
        event.preventDefault()
        if (!toggle)
            setToggle(!toggle)
        else
            setToggle(0)
    }
    return (

        <div className='navbar'>
            <div className='navbar_container'>

                <div className='navbar--left'>
                    <img src={logo}></img>
                </div>
                <div className='navbar--right'>
                    <ul className={toggle ? 'navbar--right__links' : 'navbar--right__links--display'}>
                        <li><Link to="Projects" spy={true} smooth={true}> Projects </Link> </li>
                        <li><a target={"_blank"} href="https://jainayushee.hashnode.dev/" >  Technical Blog </a> </li>
                        <li><a onClick={() => window.open('images/resume.pdf', '_blank')} > Resume </a> </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}


export default Navbar