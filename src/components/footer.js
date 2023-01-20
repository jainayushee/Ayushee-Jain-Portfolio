import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <h2 className='footer__heading'>Let's Connect </h2>
                <div className='social-links'>
                    <a href="" target="_blank"><i className="devicon-github-original"></i></a>
                    <a href="" target="_blank"> <i className="devicon-twitter-original"></i></a>
                    <a href="" target="_blank"><i className="devicon-linkedin-plain"></i></a>
                </div>
                <hr />
                <p className="footer__text">© 2022 - Made with Love</p>
            </div>
        </div>
    )
}

export default Footer