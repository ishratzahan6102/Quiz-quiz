import { faArrowTurnRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({course}) => {
    // console.log(course)
    const {id, name, logo} = course;
    return (
        <div className='course'>
            <img className={name === "Git" ? "black" : "none"} src={logo} alt=''/>
            <div className='course-details'>
                <span>{name}</span>
                <button><Link to={`/course/${id}`}>Details</Link>  <FontAwesomeIcon icon={faArrowTurnRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Course;