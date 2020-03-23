import React, { Component } from 'react';

import './Epreuve.css';
import Question from './question/Question';
import NewQuestion from './question/newQuestion/NewQuestion';

class Epreuve extends Component {

    state={
        qType:'',
        questions:[],
        answers:[],
        newQuestion: { question: '', type: '', option: [], answer: 0, index: 0 }
    }

    createQuestion=(data)=>{
        
    }

    getQuestionType=(newQuestionType)=>{

        let newQuestion={ question: '', type: '', option: [], answer: 0, index: 0 }
        newQuestion.type=newQuestionType

        this.setState({
            newQuestion:newQuestion
        },()=> console.log('from composition', this.state.newQuestion))
    }

    adjustIndex = () => {
        let index = 0;
        let tempQuestions = []
        this.state.questions.map(question => {
            index = index + 1
            question.index = index
            tempQuestions.push(question)
            return null;
        })

        this.setState({
            questions: tempQuestions
        })
    }

    showQuestions=()=>{
        let qNum=0;
        return this.state.questions.length !==0 ?(this.state.questions.map(question=>(
            <div className="question" key={qNum=qNum+1}>
                {qNum+'. '+ question.question}
                <i className='fa fa-minus-circle' onClick={(e)=>{this.removeQuestion(question.index)}} /> 
            </div>
        ))):(null)
    }

    removeQuestion=(id)=>{
        let idx=0
        let questions =this.state.questions.filter(question=>{
            idx=idx+1
            return question.index !== id
        })
        this.setState({
            questions:questions
        },()=>{this.adjustIndex()})
    }

    addOption = (e) =>{
        e.preventDefault()
        let newOption = document.getElementById('optionInput').value
        console.log(newOption)
        //Get the index of the question then add this to its option part.
        //Constraint it to at least two options before the qcm is considered valid.
    }

    render() {
        return (
            <div className="compositionContainer">
                <div className="questions">
                    <h2>Questions</h2>
                    {(this.showQuestions())}
                </div>

                <NewQuestion getQuestionType={this.getQuestionType} createQuestion={this.createQuestion} />
                {this.state.newQuestion.type!==''?(
                    <Question addQuestion={this.addQuestion} questionType={this.state.newQuestion.type}/>
                ):(null)}

                {/* <QcmAnswers addOption = {this.addOption} createQuestion = {this.createQuestion} /> */}

                {/* <QroAnswer /> */}
            </div>
        )
    }
}

export default  Epreuve;