import React, { useState } from 'react';
import { Link } from 'react-scroll'

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
                    <a href="/">Ayushee</a>
                </div>
                <div className='navbar--right'>

                    <ul className={toggle ? 'navbar--right__links' : 'navbar--right__links--display'}>
                        <li><Link to="About" spy={true} smooth={true}>  About Me </Link> </li>
                        <li><Link to="Projects" spy={true} smooth={true}> Projects </Link> </li>
                    </ul>


                </div>
            </div>

        </div>

    )
}


export default Navbar