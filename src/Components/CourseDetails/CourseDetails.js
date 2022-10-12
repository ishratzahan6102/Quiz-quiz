import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CourseDetails = () => {
    const course = useLoaderData()
    console.log(course)
    
    const correctAnswer1 = (id) =>{
        
        
        console.log(id);
        var ele = document.getElementsByName('fav_language1');
              
        for( let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                const answer = ele[i].value;
                if(answer === id){
                    toast("Your answer is correct!")
                }
                else{
                    toast("Your answer is wrong!!!")
                    toast("Correct Answer : "+id)
                }
            }
    
        }
       const options = document.getElementsByClassName('quiz-1');
       for(let option of options){
        if(option.innerText === id){
            option.parentNode.style.backgroundColor = "#bee8ae";
            option.parentNode.style.border = "1px solid green"
        }
        else{
            console.log(option.innerText)
            option.parentNode.style.backgroundColor = '#ed9191'
            option.parentNode.style.border = "1px solid red"
        }
       } 
    }


    const correctAnswer2 = (id) =>{
        
        var ele = document.getElementsByName('fav_language2');
              
        for( let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                const answer = ele[i].value;
                if(answer === id){
                    toast("Correct Answer!")
                }
                else{
                    toast("Wrong Answer!!!")
                    toast("Correct Answer : "+id)
                }
            }
    
        }
       const options = document.getElementsByClassName('quiz-2');
       for(let option of options){
        if(option.innerText === id){
            option.parentNode.style.backgroundColor = "#bee8ae";
            option.parentNode.style.border = "1px solid green"
        }
        else{
            option.parentNode.style.backgroundColor = '#ed9191'
            option.parentNode.style.border = "1px solid red"
        }
       } 
    }

    const correctAnswer3 = (id) =>{
        
        var ele = document.getElementsByName('fav_language3');
              
        for( let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                const answer = ele[i].value;
                if(answer === id){
                    toast("Correct Answer!")
                }
                else{
                    toast("Wrong Answer!!!")
                    toast("Correct Answer : "+id)
                }
            }
    
        }
       const options = document.getElementsByClassName('quiz-3');
       for(let option of options){
        if(option.innerText === id){
            option.parentNode.style.backgroundColor = "#bee8ae";
            option.parentNode.style.border = "1px solid green"
        }
        else{
            option.parentNode.style.backgroundColor = '#ed9191'
            option.parentNode.style.border = "1px solid red"
        }
       } 
    }


    const correctAnswer4 = (id) =>{
        
        console.log(id)
        var ele = document.getElementsByName('fav_language4');
              
        for( let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                const answer = ele[i].value;
                if(answer === id){
                    toast("Correct Answer!")
                }
                else{
                    toast("Wrong Answer!!!")
                    toast("Correct Answer : "+id)
                }
            }
    
        }
       const options = document.getElementsByClassName('quiz-4');
       for(let option of options){
        if(option.innerText === id){
            
            option.parentNode.style.backgroundColor = "#bee8ae";
            option.parentNode.style.border = "1px solid green"
        }
        else{
            console.log(option.innerText)
            option.parentNode.style.backgroundColor = '#ed9191'
            option.parentNode.style.border = "1px solid red"
        }
       } 
    }


    const correctAnswer5 = (id) =>{
        
        var ele = document.getElementsByName('fav_language5');
              
        for( let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                const answer = ele[i].value;
                if(answer === id){
                    toast("Correct Answer!")
                }
                else{
                    toast("Wrong Answer!!!")
                    toast("Correct Answer : "+id)
                }
            }
    
        }
       const options = document.getElementsByClassName('quiz-5');
       for(let option of options){
        if(option.innerText === id){
            option.parentNode.style.backgroundColor = "#bee8ae";
            option.parentNode.style.border = "1px solid green"
        }
        else{
            option.parentNode.style.backgroundColor = '#ed9191'
            option.parentNode.style.border = "1px solid red"
        }
       } 
    }




    return (
        <div className='quiz'>
           <h1>Quiz of {course.data.name}</h1>
           <div className='question'>
                <span>Quiz 1: {course.data.questions[6].question}</span>
                <button onClick={() => correctAnswer1(course.data.questions[6].correctAnswer)} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button><ToastContainer />
           </div>
           <div className='options'>
                <form className='options-form'>
                   <div id='correct'>
                   <input type="radio"  id="1" name="fav_language1" value={course.data.questions[6].options[0]}></input>
                    <label className='quiz-1'>{course.data.questions[6].options[0]}</label>
                   </div>
                   <div>
                   <input type="radio" id="2" name="fav_language1" value={course.data.questions[6].options[1]} ></input>
                    <label className='quiz-1' >{course.data.questions[6].options[1]}</label>
                   </div>
                   <div>
                   <input type="radio" id="3" name="fav_language1" value={course.data.questions[6].options[2]} ></input>
                    <label className='quiz-1' >{course.data.questions[6].options[2]}</label>
                   </div>
                   <div>
                   <input type="radio" id="4" name="fav_language1" value={course.data.questions[0].options[3]} ></input>
                    <label className='quiz-1' >{course.data.questions[6].options[3]}</label>
                   </div>
                   <span id='correctAnswerDisplay1'></span>
                </form>
           </div>

           <div className='question'>
                <span>Quiz 2: {course.data.questions[1].question}</span>
                <button onClick={() => correctAnswer2(course.data.questions[1].correctAnswer)} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           </div>
           <div className='options'>
                <form className='options-form'>
                   <div id='correct'>
                   <input type="radio"  id="1" name="fav_language2" value={course.data.questions[1].options[0]}></input>
                    <label className='quiz-2'>{course.data.questions[1].options[0]}</label>
                   </div>
                   <div>
                   <input type="radio" id="2" name="fav_language2" value={course.data.questions[1].options[1]} ></input>
                    <label className='quiz-2' >{course.data.questions[1].options[1]}</label>
                   </div>
                   <div>
                   <input type="radio" id="3" name="fav_language2" value={course.data.questions[1].options[2]} ></input>
                    <label className='quiz-2' >{course.data.questions[1].options[2]}</label>
                   </div>
                   <div>
                   <input type="radio" id="4" name="fav_language2" value={course.data.questions[1].options[3]} ></input>
                    <label className='quiz-2' >{course.data.questions[1].options[3]}</label>
                   </div>
                  
                </form>
           </div>

           <div className='question'>
                <span>Quiz 3: {course.data.questions[2].question}</span>
                <button onClick={() => correctAnswer3(course.data.questions[2].correctAnswer)} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           </div>
           <div className='options'>
                <form className='options-form'>
                   <div id='correct'>
                   <input type="radio"  id="1" name="fav_language3" value={course.data.questions[2].options[0]}></input>
                    <label className='quiz-3'>{course.data.questions[2].options[0]}</label>
                   </div>
                   <div>
                   <input type="radio" id="2" name="fav_language3" value={course.data.questions[2].options[1]} ></input>
                    <label className='quiz-3' >{course.data.questions[2].options[1]}</label>
                   </div>
                   <div>
                   <input type="radio" id="3" name="fav_language3" value={course.data.questions[2].options[2]} ></input>
                    <label className='quiz-3' >{course.data.questions[2].options[2]}</label>
                   </div>
                   <div>
                   <input type="radio" id="4" name="fav_language3" value={course.data.questions[2].options[3]} ></input>
                    <label className='quiz-3' >{course.data.questions[2].options[3]}</label>
                   </div>
                </form>
           </div>


           <div className='question'>
                <span>Quiz 4: {course.data.questions[5].question}</span>
                <button onClick={() => correctAnswer4(course.data.questions[5].correctAnswer)} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           </div>
           <div className='options'>
                <form className='options-form'>
                   <div id='correct'>
                   <input type="radio"  id="1" name="fav_language4" value={course.data.questions[5].options[0]}></input>
                    <label className='quiz-4'>{course.data.questions[5].options[0]}</label>
                   </div>
                   <div>
                   <input type="radio" id="2" name="fav_language4" value={course.data.questions[5].options[1]} ></input>
                    <label className='quiz-4' >{course.data.questions[5].options[1]}</label>
                   </div>
                   <div>
                   <input type="radio" id="3" name="fav_language4" value={course.data.questions[5].options[2]} ></input>
                    <label className='quiz-4' >{course.data.questions[5].options[2]}</label>
                   </div>
                   <div>
                   <input type="radio" id="4" name="fav_language4" value={course.data.questions[5].options[3]} ></input>
                    <label className='quiz-4' >{course.data.questions[5].options[3]}</label>
                   </div>
                </form>
           </div>


           <div className='question'>
                <span>Quiz 5: {course.data.questions[4].question}</span>
                <button onClick={() => correctAnswer5(course.data.questions[4].correctAnswer)} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
           </div>
           <div className='options'>
                <form className='options-form'>
                   <div id='correct'>
                   <input type="radio"  id="1" name="fav_language5" value={course.data.questions[4].options[0]}></input>
                    <label className='quiz-5'>{course.data.questions[4].options[0]}</label>
                   </div>
                   <div>
                   <input type="radio" id="2" name="fav_language5" value={course.data.questions[4].options[1]} ></input>
                    <label className='quiz-5' >{course.data.questions[4].options[1]}</label>
                   </div>
                   <div>
                   <input type="radio" id="3" name="fav_language5" value={course.data.questions[4].options[2]} ></input>
                    <label className='quiz-5' >{course.data.questions[4].options[2]}</label>
                   </div>
                   <div>
                   <input type="radio" id="4" name="fav_language5" value={course.data.questions[4].options[3]} ></input>
                    <label className='quiz-5' >{course.data.questions[4].options[3]}</label>
                   </div>
                </form>
           </div>

           
        </div>
    );
};

export default CourseDetails;

// {course.data.questions[0].options[0]}