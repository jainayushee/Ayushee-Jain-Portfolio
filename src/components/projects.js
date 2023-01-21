import React from 'react';
import details from '../projectholder'
import videoProjects from '../videoProjectHolder'
import VideoProject from './videoProjects';
import LiveProject from './liveProject';

const Projects = () => {

    return(
        <div className = 'projects Container' id = "Projects">
            <div className='project__container__heading'>
                <div className='project__container__heading__main'>
                    Projects
                </div>
                <div className='project__container__heading__sub'>
                    My projects, major and minor, so far.
                </div>
            </div>

            <div className = 'list'>
                <div className = 'row'>
                     

                    {details.map(project => {
                            return(
                                <LiveProject show={project}></LiveProject>
                     )})}                   
                    

                    {videoProjects.map(project => {
                        return (
                           <VideoProject show={project}></VideoProject>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects