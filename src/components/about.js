import React from 'react';


const Intro = () => {
    return (
        <div className='About' id="About">
            <div className='About__container'>
                <div className='About__container__heading'>
                    <div className='About__container__heading__main'>
                        About Me
                    </div>
                </div>

                <div className='About__container__text__wrapper'>
                    <div className='about--image'>
                        <img className='personalpic' src=""></img>
                    </div>
                    <div className='about--text'>
                        <p>Hi, I am Ayushee Jain, a frontend developer on a voyage to become a full stack developer.
                            I'm a self motivated learner and I love challenges.
                        </p>

                        <p>
                            I am presently living in Khopoli, India. I have graduated in engineering with specialization in the domain of electronics and telecommunication.
                        </p>
                        <p>If you wish to talk or collaborate or feel I am suitable for a certain position in your organisation, do hit me up, I have my socials down below. 👇</p>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default Intro;