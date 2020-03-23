import React from 'react'

import './DisplayQuestion.css'


export default function DisplayQuestion(props) {

    let questionPapers = [
        {header:{subject:"Chemistry", teacher:"Dogo Collins", timeAllowed:2, class:"IRT3"}, questions:[
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 1 },
            { question: "Quel est le nom de ton pere?", type: "QRO", option: [], answer: "Kouatchoua Mark", index: 2 },
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 3 }
        ]},
        {header:{subject:"Physics", teacher:"Neba Collins", timeAllowed:2, class:"IRT3"}, questions:[
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 1 },
            { question: "Quel est le nom de ton pere?", type: "QRO", option: [], answer: "Kouatchoua Mark", index: 2 },
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 3 }
        ]},
        {header:{subject:"Mathematics", teacher:"Kenjoh Anthony", timeAllowed:2, class:"IRT3"}, questions:[
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 1 },
            { question: "Quel est le nom de ton pere?", type: "QRO", option: [], answer: "Kouatchoua Mark", index: 2 },
            { question: "Quel est le nom de ton pere?", type: "QCM", option: ["Tchakoumi", "Kouatchoua", "Tamen", "Komguem"], answer: 1, index: 3 }
        ]}
    ]

    let proposedAnswers = []
    
    let desiredPapers =(subjectName)=>{
        return props.questionPapers.filter(questionPaper=>questionPaper.header.subject===subjectName)
    }

    console.log(desiredPapers(props.subjectName))

    let showHeader =()=>{
        let headerUnit = desiredPapers(props.subjectName)[0].header
        return(
            <div className="headerUnit">
                <h2 className='headerElmt'> Epreuve de {headerUnit.subject} pour la classe de {headerUnit.class}</h2>
                <h2 className='headerElmt'> Enseignant: {headerUnit.teacher} </h2>
                <h2 className='headerelmt'> Duree: {headerUnit.timeAllowed} Heures</h2>
            </div>
        )
    }

    let collectAnswer=(string)=>{
        let tempAnswer = {questionNumber:'', proposedAnswer:''}
        let tempQNumber = Number(string.split('A')[0])
        tempAnswer.questionNumber = tempQNumber
        tempAnswer.proposedAnswer=document.getElementById(string).value
        let newList = proposedAnswers.filter(proposition=>{
            return proposition.questionNumber !== tempQNumber
        })

        proposedAnswers = [...newList, tempAnswer]
        console.log(proposedAnswers)
    }

    let showQuestions =()=>{
        return desiredPapers(props.subjectName)[0].questions.map(question=>{
            if(question.type==="QCM"){
            return (
            <div className='askedQuestion' key={question.index}>
                <h2>{question.index}. {question.question}</h2>
                <form className="propositions">
                    {
                        question.option.map(option=>(
                            <div className='option' key={option}>
                                <input type='radio' id={`${question.index}A+${option}`} onClick={() => collectAnswer(`${question.index}A+${option}`)} name={`${question.index}+option`} value={option} />
                                <label className="optionRadio" htmlFor={`${question.index}A+${option}`} >{option}</label>
                            </div>
                        ))
                    }
                </form>
            </div>)
            }else if(question.type==="QRO"){
                return (
                <div className='askedQuestion' key={question.index}>
                    <h2>{question.index}. {question.question}</h2>
                    <form className="qroAnswer">
                    <textarea className="qroAnswerInput" id={`${question.index}Answer`} onChange={() => collectAnswer(`${question.index}Answer`)} placeholder='Entrez la proposition' required /><br />
                    </form>
                </div>
            )}return null;
        })
    }

    return (
        <div className="questionPaper">
            {showHeader()}

            <div className='displayQuestion' >
                {showQuestions()}
            </div>
            <button className='submitPaper' onClick={()=>props.uploadAnswers(proposedAnswers)}>Soumettre l'epreuve</button>
        </div>
    )
}
