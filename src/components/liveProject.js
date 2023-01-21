import Fade from 'react-reveal/Fade';

const LiveProject = (props) => {
    const project = props.show;

    return (
        <div key={project.title}className = 'col-12 col-md-6 col-xl-4 '>
                                        <Fade bottom>
                                                <div className = 'projectwrapper'>
                                                    <div className = 'projectimagecontainer'>
                                                        <img className = 'project__image' src = {project.path} ></img>
                                                        <a href = {project.code} className = 'popupbuttons code' target = "_blank">Code</a>
                                                        {project.demo && <a href = {project.demo} target = "_blank" className = 'popupbuttons live'>Live</a>}

                                                    </div>
                                            
                                                    <div className = 'projectdetailscontainer'>
                                                        <h2 className = 'project__title' dangerouslySetInnerHTML={{__html: project.title}}></h2> 
                                                        <span className = 'stack'>{project.pill}</span>
                                                        <h2 className = 'project__description'>{project.description ? project.description : undefined}</h2>
                                                    </div>
                                                </div>  
                                        </Fade>                             
                                </div>
    )
}

export default LiveProject;