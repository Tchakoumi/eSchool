import React from 'react';
import { Link } from 'react-router-dom'

import './SubDropDownListItem.css';

export default function SubDropDownListItem(props) {
    return (
        <Link to={`/${props.link}`} className = "matiereCom">
            {props.subItemName}
        </Link>
    )
}
