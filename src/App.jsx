import { useState } from 'react';
import Heading from './component/Heading';
import CourseCard from './component/CourseCard';
import Courseimage from './assets/course.jpg';
import CourseimageMoton from './assets/moton.jpg';
import CourseimageUx from './assets/ux.jpg';
import Courseimagepaython from './assets/paython.jpg';
import Courseimageapp from './assets/app.jpg';

let data = [
  {
    id : 1,
    courseName :"mern stack",
    img : Courseimage,
    review : '120',
    price : '100'
  },
  
  {
    id : 2,
    courseName :'moton',
    img : CourseimageMoton,
    review : '120',
    price : '200'
  },
  {
    id : 3,
    courseName :"Ux/Ui",
    img : CourseimageUx,
    review : '120',
    price : '300'
  },
  {
    id : 3,
    courseName :"App Devlopment",
    img : Courseimageapp,
    review : '120',
    price : '300'
  },
  {
    id : 3,
    courseName :"Paython ",
    img : Courseimagepaython,
    review : '120',
    price : '300'
  },
]

function App() {

  return (
    <>
     <Heading text='Our Course List' cls='one'/>
    
     <div className="course_wrapper">
     {
      data.map((item, index)=>(
        <CourseCard img={item.img} courseName={item.courseName} review={item.review} price={item.price}/>
        ))
      }
      </div>
    </>
  )
}

export default App
