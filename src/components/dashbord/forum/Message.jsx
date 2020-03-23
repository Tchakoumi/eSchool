import React from 'react'
import './Message.css';
export default function Message(props)
{
    return (
            <div className="container">
                <div className={`row Message ${props.isSender?"message-right align-self-end":"message-left align-self-start"}`}>
                <div className={`col `}>
                    <div className={`row `}>
                        <div className="container" >
                            <div className={`row sender-name ${props.isSender?"align-self-end":"align-self-start"} `}>
                                <div className={`col rounder-top `}>
                                    {props.type} : {props.sender}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row message-content">
                        {props.content}
                    </div>                  
                </div>
            </div>
            </div>
    );
}