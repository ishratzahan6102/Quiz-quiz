import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'


const Topics = () => {
    const courses = useLoaderData()
    console.log(courses)
    console.log(courses)
    return (
        <div className='courses  my-6 p-20' >
        
            <div className='carts text-start'>
            <h1 className='text-xl underline font-bold text-gray-800 uppercase '>Available Topics</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10'>
            {
                courses.data.map(course => <Course key={course.id}
                course={course}></Course>)
            }
            </div>
            </div>
        </div>
    );
};

export default Topics;