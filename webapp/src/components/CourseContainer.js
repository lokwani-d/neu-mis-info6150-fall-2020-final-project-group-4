import React, { Component } from 'react'
import CourseCards from './CourseCards'

class CourseContainer extends Component {

    render() {

        return this.props.getCourseArray.map((course)=>(
            < CourseCards 
            key={course.id}
            course={course}
            openCourseDetails={this.props.openCourseDetails} 
            />
        ));
      
    }
}

export default CourseContainer