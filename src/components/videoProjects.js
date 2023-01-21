import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const VideoProject = (props) => {
    const project = props.show;

    return (
        <div className='col-12 col-md-6 col-xl-4 '>
            <Fade bottom>
                <div className='projectwrapper videowrapper'>
                    <div className='projectimagecontainer videocontainer'>
                        <iframe className='project__image' src={project.live} width="640" height="480" allow="autoplay"></iframe>
                        {project.code && <a target={"_blank"} href={project.code} className='popupbuttons live'>Code</a>}
                    </div>

                    <div className='projectdetailscontainer'>
                        <h2 className='project__title'>{project.title}</h2>
                        { project.pill && <span className = 'stack'>{project.pill}</span>}
                        <h2 className='project__description'>{project.description}</h2>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default VideoProject;