import React from 'react'
import courses from './course-data'

import Course from './components/Course'

function App() {
  return (
    <div className="container">
      { courses.map(course =>
        <Course
          { ...course }
          key={ course.id }
        />
      ) }
    </div>
  )
}

export default App