import React from 'react'

import './StatLine.css';

export default function StatLine(props) {
    return (
        <div className={`${props.type} statLine`}>
            <h3>{props.tdata.subject}</h3>
            <h3>{props.tdata.cc}</h3>
            <h3>{props.tdata.exam}</h3>
            <h3>{props.tdata.pourcentage}</h3>
            <h3>{props.tdata.grade}</h3>
        </div>
    )
}
