import React from 'react'

import './QcmAnswers.css'

class QcmAnswers extends React.Component {
    state={
        option:false,
    }

    createOption=()=>{
        this.setState({
            option:!this.state.option
        })
    }

    render(){
        return (
            <div>
                <form className='newQuestionBtn'>
                    <i className="fa fa-plus-circle" />
                    <input type="button" onClick={this.createOption} className="newQuestion" value="Ajouter une option" />
                </form>
                {this.state.option?(
                    <form className='addOptionForm'>
                        <input className="option" id='optionInput' required placeholder="Entrez l'option" type='text' /><br />
                        <input type='submit' onClick={(e) => this.props.addOption(e)} className='newOption' value='Valider' />
                    </form>
                ):(null)}
            </div>
        )
    }
}

export default  QcmAnswers