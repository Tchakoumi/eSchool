import React from 'react';
import { Link } from 'react-router-dom'
import './CompositionListItem.css';



export default function CompositionListItem(props) {
    return (
            <Link to = {`/${props.link}`} className = "comp composTitle">
                    {props.nomMatiere}
                    <span>{props.typeCompos}</span>
            </Link>           
    )
}
