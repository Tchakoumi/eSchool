import React, {Component} from 'react';
import './InputChat.css';

class InputChat extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            input:''
        }
        this.handleClick=(e)=> {
            this.setState({input:''});
            props.sendMessageFunction(this.state.input);
        } 
        this.handleChange = (e)=> this.setState({input:e.target.value});
    }
    
    
    render()
    {
        return (
            <div className="input-group mb-3 inputChat">
                <input type="text" className="form-control" onChange={this.handleChange} value={this.state.input} placeholder="Ecrivez votre message ici..." aria-label="Ecrivez votre message ici..." aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-success" type="button" onClick={this.handleClick} id="button-addon2"><i className="fa fa-send fa-1x"></i>Envoyer</button>
                </div>
            </div>
        )
    }
}
export default InputChat;
