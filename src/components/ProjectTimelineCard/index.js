// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-head-card">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
