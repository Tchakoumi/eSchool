import React,{Component} from 'react';
import Message from './Message'; 
import InputChat from './InputChat';
import './Chat.css';


class Chat extends Component
{
    constructor(props)
    {
        super(props);        
        this.state={
            messages:[]
        };
    }
    addNewMessage(msg)
    {
        if(msg!=='')
        {            
            let messages=this.state.messages.slice();
            messages.push(msg);
            this.setState({messages});
        }
    }
   render()
   {
       let messages=this.state.messages.map((message)=> <Message key={new Date().getTime()} type={this.props.currentUser.typeCompte} sender={this.props.currentUser.name} isSender={true} content={message} />);       
        return (
            <div className="container chat">
                <div className="row zone_message">
                    {messages}
                </div>
                <div className="row">
                    <InputChat sendMessageFunction={(msg)=>this.addNewMessage(msg)} />
                </div>
            </div>
        );
   }
}

export default Chat