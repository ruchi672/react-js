import React,{useState} from 'react';

// function QuestionQuiz({instruction,options,selected})  {
    const QuestionQuiz = ({ instruction, options, selected}) => {
    
    const [answerOption,setAnswerOption]= useState(options) // d
   console.log({ instruction, options, selected})
    return(
        
    <div>
    <div>{instruction}</div>
    {answerOption.map((text,index)=>(
       
        <button key={index}
        className="but-design"
        onClick ={()=>{
            setAnswerOption();
            selected(text);
        }}
        >{text}</button>
        
    ))}

    </div>
    )
}

export default QuestionQuiz;