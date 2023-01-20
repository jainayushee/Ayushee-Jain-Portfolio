import React from 'react';
import hero from '../../src/images/heroo.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Header = () => {
    return (
        <div className='header__container' id='header'>
            <div className='header__container__box'>

                <div className='header__container--text'>
                    <Fade>
                    <h2>Hi there! I’m <span class="header_highlight">Ayushee Jain</span></h2>              
                
                    </Fade>
                    <Zoom delay={500}>
                    <p className='subheading'>An engineer and programmer from India, on a journey to become a better one.</p>
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