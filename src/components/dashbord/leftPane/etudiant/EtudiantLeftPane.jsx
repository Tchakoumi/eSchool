import React from 'react';

import LeftPane from './../../../shared/leftPane/LeftPane';

export default function EtudiantLeftPane(props)
{
    const linkData=[
        {
        link:'/dashboard/Tchapleu/modules',
            icon:'fa fa-folder-open',
            textValue:'Modules'
        },
        {
            link:'/dashboard/compositions', 
            icon:"fa fa-book", 
            textValue:"Composition"
        },
        {
            link:'/dashboard/devoirs',
            icon:"fa fa-edit",
            textValue:"Devoirs"
        },
        {
            link:'/dashboard/Tchapleu/statistiques',
            icon:"fa fa-line-chart",
            textValue:"Statistiques"
        },
        {
            link: '/dashboard/Tchapleu/math/forum',
            icon: "fa fa-user",
            textValue: "Forum"
        }
    ];
    return (<LeftPane userData={props.user} linkData={linkData}/>);
}