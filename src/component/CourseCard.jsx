import React from 'react'
import Image from './Image';


const CourseCard = ({courseName, review , price, img}) => {
  return (
    <div className='course_card'>
        <div className="course_img">
            <Image source={img} alt='not found'/>
        </div>
        <div className="card_details">
            <h5>All Course</h5>
            <h4>{courseName}</h4>
            <span>Review : {review}</span>
            <h4>Price : {price}</h4>
        </div>
    </div>
  )
}

export default CourseCard