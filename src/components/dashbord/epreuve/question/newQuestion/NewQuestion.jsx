import React from 'react'

import './NewQuestion.css'

// let question = { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 1 }
// let questions = []
// let newQuestion={question:'', type:'', option:[], answer:0, index:0}
// let coming=false;


class NewQuestion extends React.Component {

    state={
        coming:false,
        questions:[],
        newQuestion:{ question: '', type: '', option: [], answer: 0, index: 0 }
    }

    announceQuestion =()=>{
        this.setState({
            coming:true
        })
    }

    getQuestionType =(e)=> {
        let newQuestion = { question: '', type: '', option: [], answer: 0, index: 0 }
        newQuestion.type=e.target.value
        this.setState({
            newQuestion : newQuestion
        }, ()=>this.props.getQuestionType(this.state.newQuestion.type))
    }

render (){
    return (
        <div>
            <form className="newQuestionBtn">
                <i className="fa fa-plus-circle" />
                <input type="button" onClick={this.announceQuestion} className="newQuestion" value="Ajouter une question" />
            </form>
            {this.state.coming?(
                <form className="questionTypeForm">
                    <input type='radio' id='QCM' onClick={this.getQuestionType} name='qType' value='QCM' />
                    <label className="radioLabel" htmlFor='QCM'>QCM</label>
                    <input type='radio' id='QRO' onClick={this.getQuestionType} name='qType' value='QRO' />
                    <label className="radioLabel" htmlFor='QRO'>QRO</label>
                    <input type='radio' id='ESSAY' onClick={this.getQuestionType} name='qType' value='ESSAY' />
                    <label className="radioLabel" htmlFor='ESSAY'>ESSAY</label>
                </form>
            ):(null)}
        </div>
    )
}}

export default NewQuestion