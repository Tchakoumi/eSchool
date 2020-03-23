import React from 'react';

import LeftPane from '../../../shared/leftPane/LeftPane';

export default function EnseignantLeftPane(props)
{
    const linkData=[
        {
            link:'/dashbord/classes',
            icon:'fa fa-group',
            textValue:'Classes'
        }
    ];
    return (<LeftPane userData={props.user} linkData={linkData}/>);
}