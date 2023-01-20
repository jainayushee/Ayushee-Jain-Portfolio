import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <h1 className='footer__heading'>Get in touch!</h1>
                <div className='social-links'>
                    <a href="https://github.com/jainayushee" target="_blank"><i className="devicon-github-original"></i></a>
                    <a href="https://www.linkedin.com/in/ayushee-jain-a5366114b/" target="_blank"><i className="devicon-linkedin-plain"></i></a>                    
                </div>               
                <p className="footer__text">© 2022 - Made with Love</p>
            </div>
        </div>
    )
}

export default Footer