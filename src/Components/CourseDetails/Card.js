import React from 'react';


function checkAnswer(correctAnswer){
    console.log("clicked")
    var check = document.getElementsByName('radio-2');
    
}




const Card = (test) => {
    console.log(test)
    const {options, id, question, correctAnswer} = test.test

   
  

    return (
        <div>
          
            <div className="card question-border w-full bg-base-100 mx-auto p-6 shadow-none rounded-none">
                <div className="card-body">
                    <div className="card-actions justify-end">
                       
                    </div>
                    <p className='p-8 mx-auto shadow w-full'>{question}</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        options.map(option => <div className='p-8 mx-auto shadow w-full flex flex-row gap-2'>
                                <input id="checkCorrectAnswer"  type="radio" name="radio-2" className="radio radio-primary"  />  
                                <p id="answer" className='text-start '>{option}</p>
                            </div>
                      )
                    }
                    </div>
                    <button onClick={() => checkAnswer(correctAnswer)} className='btn btn btn-primary w-1/5 mx-auto my-6'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Card;