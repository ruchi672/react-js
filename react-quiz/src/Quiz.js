import React from 'react';
import QuestionQuiz from './QuestionQuiz';
import questionAPI from './questions/qBank.js';
import ResultBox from './ResultBox'


// let responses=0;
// let score=0;
class Quiz extends React.Component{


    constructor(props){
        super(props);
        this.state={
            questionBank:[],
            responses:0,
            score:0
        }
        
    }
   

    getQuestions = () => {
        questionAPI().then(question => {
            console.log(question);
            this.setState({
                questionBank: question
            });
        });
    };


    
    computeAnswer = (answer, correctAns) => {
        console.log(this.state.responses)
        if (answer === correctAns) {
          this.setState({
            score: this.state.score + 1
          });
        // score=score+1;
        }

        this.setState({
          responses: this.state.responses < 5
            ? this.state.responses + 1
            : 5
        },()=>{
            console.log(this.state.responses)
        });
        // if(responses<5){
        //     responses=responses+1;
        // }
        // else 
        // {
        //     responses=5;
        // }
        
    };




    componentDidMount(){
        this.getQuestions();
    }

    // computeAnswer(answerOption,answer){
    //     if(answerOption===answer){
    //         this.setState({
    //             score:this.state.score+1
    //         });
    //     }
    //     this.setState({
    //         responses:this.state.responses<5
    //         ? this.state.responses+1:5
    //     });

    // }

    // computeAnswer = (answer, correctAns) => {
    //     console.log(this.state.responses)
    //     if (answer === correctAns) {
    //       this.setState({
    //         score: this.state.score + 1
    //       });
    //     }
    //     this.setState({
    //       responses: this.state.responses < 5
    //         ? this.state.responses + 1
    //         : 5
    //     },()=>{
    //         console.log(this.state.responses)
    //     });
        
    // };



    render(){
        return(
            <div>
            <div className="container">QUIZ START</div>
            {this.state.questionBank.length>0 &&
            this.state.responses<5 &&
            this.state.questionBank.map(({instruction,options,answer,id}) =>
            <QuestionQuiz instruction={instruction} options={options} key={id} selected={
                answerOption=>this.computeAnswer(answerOption,answer)} />
            )
            }
              {this.state.responses===5?
            (<ResultBox score={this.state.score}
                playAgain={this.playAgain}/>)
            :null} 

            </div>
        )
    }
}

export default Quiz;