import React from 'react';
import hero from '../../src/images/hero.svg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Header = () => {
    return (
        <div className='header__container' id='header'>
            <div className='header__container__box'>

                <div className='header__container--text'>
                    <Fade>
                        <h1 className='heading'> Hey there! I'm <span className='name'> Ayushee Jain </span> </h1>
                    </Fade>
                    <Zoom delay={500}>
                        <p className='subheading'>A Front End Developer and  programmer from India</p>
                        <div className='links'>
                            <a className='links_1' target="_blank" >Resume</a>
                        </div>
                    </Zoom>
                </div>
                <Fade right>
                    <div className='header__container--image'>
                        <img src={hero}></img>
                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default Header;

// <a href='https://www.freepik.com/vectors/work'>Work vector created by stories - www.freepik.com</a>