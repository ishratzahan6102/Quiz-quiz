import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'
import test2 from '../../test2.jpg'

const Course = ({ course }) => {
    // console.log(course)
    const { id, name, logo } = course;
    return (
        <div className=''>
            <div className="card bg-slate-100  shadow-xl py-4">
                <figure className="px-4">
                    <img src={test2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-start text-start">
                    <div className='flex flex-row gap-2 justify-center items-center'>
                        <div className="avatar">
                            <div className="w-8 rounded-none bg-black">
                                <img src={logo} alt="Tailwind-CSS-Avatar-component" />
                            </div>

                        </div>
                        <span className="text-start font-bold uppercase ">{name}</span>
                    </div>

                    <p className='text-start'>Ready to take an easy assessment?</p>
                    <div className="card-action  ">
                        <Link to={`/course/${id}`} ><button className="btn btn-primary btn-sm rounded-none">Take Quiz</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;