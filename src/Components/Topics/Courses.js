import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Topics = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='courses'>
            <div className='page-heading'>
                <div className='heading-details'>
                    <h1>Test Your Coding Knowledge</h1>
                    <p>All you need to do is choose a coding test and send it to your friends for review. Share your Knowledge because sharing is caring. Available topics are- Java test c# test sql test python test php test javascript test html/css test and so on. </p> <br></br>
                    <p>Read our blogs by <Link to='/blog'>clicking here </Link>.</p>
                </div>

                <div className='heading-image'>
                    <img src='What-is-an-Online-Javascript-Programming-Test-and-How-to-Ace-It.jpg' alt=''></img>
                </div>
            </div>
            <div className='carts'>
            <h1>Available Topics</h1>
            <div className='courses-carts'>
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