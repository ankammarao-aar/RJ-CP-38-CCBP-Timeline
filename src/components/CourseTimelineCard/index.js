// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTagsView = each => (
    <li key={each.id}>
      <p className="name">{each.name}</p>
    </li>
  )

  return (
    <div>
      <div className="course-head-card">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="clock-card">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>

      <ul className="list-container">
        {tagsList.map(each => renderTagsView(each))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
