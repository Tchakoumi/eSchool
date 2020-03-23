import React from 'react';

import './LeftPane.css';
import Avatar from './../avatar/Avatar';
import NavLink from './../navlink/NavLink';
import maleUser from './../../../asset/images.png';

export default function LeftPane(props) {   

    const allLink = props.linkData.map(aLink=>{
        return <NavLink icon={aLink.icon} link={aLink.link} textValue={aLink.textValue}/>
    })

    return (
        <div className="leftPane">
            <Avatar className="avatar" 
                image={maleUser}
                alt={props.userData.userName}
                width={100}
                userName={props.userData.userName}
            />
            {allLink}
        </div>
    )
}
