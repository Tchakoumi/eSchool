import React from 'react';

import './DropDownListItem.css';



export default function DropDownListItem(props) {

    return (
        <div className="moduleTitle" onClick={(e)=>props.handleClick(e, `${props.itemName}`)}>
            {props.itemName}
            <i className="fa fa-plus-circle" id={`${props.itemName}DropIcon`} />
        </div>
    )
}
