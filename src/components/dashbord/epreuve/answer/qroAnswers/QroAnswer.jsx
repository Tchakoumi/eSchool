import React from 'react'

import './../../question/Question.css'

export default function QroAnswer() {
    return (
        <form className='addAnswerForm'>
            <textarea className="answerInput" id="answerInput" placeholder='Entrez la reponse' required /><br />
            <input type='submit' onClick={(e) => this.addOption(e)} className='answer' value='Valider' />
        </form>
    )
}
