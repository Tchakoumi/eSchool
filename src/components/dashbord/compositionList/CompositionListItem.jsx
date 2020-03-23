import React from 'react';
import { Link } from 'react-router-dom'
import './CompositionListItem.css';



export default class CompositionListItem {
        render(){
    return (
            <Link to = {`/${this.props.link}`} className = "comp composTitle">
                    {this.props.nomMatiere}
                    <span>{this.props.typeCompos}</span>
            </Link>           
    )}
}
