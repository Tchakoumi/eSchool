import React from 'react'

import './Question.css';
import QcmAnswers from './../answer/qcmAnswers/QcmAnswers';

let tempOptions = []
class Question extends React.Component {

    state={
        options:[],
        questions:[],
        data: {}
    }

    addOption =(e)=>{
        e.preventDefault()
        let proposition = document.getElementById('optionInput').value
        if(proposition!==''){
            tempOptions.push(proposition)
            this.setState({
                options : tempOptions 
            },()=>console.log("frm Qstn", this.state.options))
        }
        document.getElementById('optionInput').value=''
    }

    addQuestion = (e) => {
        e.preventDefault()
        let newQuestion = document.getElementById("newQuestionInput").value
        if (newQuestion !== '' && (this.props.questionType === "QCM" && tempOptions.length >= 2) || (this.props.questionType === 'QRO' || this.props.questionType === 'ESSAY')) {
            newQuestion = { question: newQuestion, index: this.state.questions.length + 1 }
            let question = [...this.state.questions]
            question.push(newQuestion);
            this.setState({
                questions: question
            }, ()=>console.log('frm qstn', this.state.questions))
            document.getElementById("newQuestionInput").value = ''
            
            let newQuestions = { question: '', type: '', option: [], answer: 0, index: 0 }
            newQuestions.question=newQuestion.question
            newQuestions.type=this.props.questionType
            newQuestions.option = this.state.options
            newQuestions.index = newQuestion.index

            this.setState({
                data:newQuestions
            },()=>this.props.uploadData(newQuestions))

        }else alert('vous devez avoir au moins deux options pour un QCM')
    }

    displayQcmAnswers = () =>{
        return this.props.questionType === 'QCM' ? (<QcmAnswers addOption={this.addOption} />):(null)
    }

    readQuestion=()=>{

    }

    render(){
        return (
            <div>
                <form className="newQuestionForm">
                    <textarea className="questionInput" id="newQuestionInput"  placeholder='Entrez la question' required />
                </form>
                {this.displayQcmAnswers()}
                <input className="addQuestion" type='submit' value='Ajouter la question' onClick={this.addQuestion} />
            </div>
        )
    }
}

export default Question;