import React from 'react'
import './NavLink.css'
import { Link } from 'react-router-dom';

export default function NavLink(props) {
    console.log(props);
    return (
        <div className="parent">
            <Link to={props.link} className = "navLink">
                <span>
                    <i className={`${props.icon}`} />
                    {props.textValue}
                </span>
            </Link>
        </div>
    )
}
