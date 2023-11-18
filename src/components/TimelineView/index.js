// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderChronoView = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimeLineCard key={each.id} courseDetails={each} />
    }
    return <ProjectTimeLineCard key={each.id} projectDetails={each} />
  }

  return (
    <div className="bg-container">
      <h1 className="journey-heading">
        MY JOURNEY OF <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>

      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{secondary: '#ffffff', titleColor: '#0967d2'}}
      >
        {timelineItemsList.map(each => renderChronoView(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
