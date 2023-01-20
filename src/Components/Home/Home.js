import React from 'react';
import Lottie from "lottie-react";
import quiz from '../../quiz.json'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <Lottie  className="w-full lg:w-3/6" animationData={quiz} loop={true}/>
    <div className= 'text-center lg:text-start w-full lg:w-3/6'>
      <h1 className="text-5xl font-bold">QUIZ now!</h1>
      <p className="py-6 text-justify">A quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material and any existing knowledge gaps.</p>
      <Link to="/topics"><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;