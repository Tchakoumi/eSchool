import React from 'react';

import LeftPane from './../../../shared/leftPane/LeftPane';

export default function EtudiantLeftPane(props)
{
    const linkData=[
        {
        link:'/dashbord/modules',
            icon:'fa fa-folder-open',
            textValue:'Modules'
        },
        {
            link:'/dashbord/compositions', 
            icon:"fa fa-book", 
            textValue:"Composition"
        },
        {
            link:'/dashbord/devoirs',
            icon:"fa fa-edit",
            textValue:"Devoirs"
        },
        {
            link:'/dashbord/statitique',
            icon:"fa fa-line-chart",
            textValue:"Statistiques"
        }
    ];
    return (<LeftPane userData={props.user} linkData={linkData}/>);
}