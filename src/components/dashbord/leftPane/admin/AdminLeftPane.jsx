import React from 'react';

import LeftPane from './../../../shared/leftPane/LeftPane';

export default function AdminLeftPane(props)
{
    const linkData=[
        {
            link:'/dashbord/enseignant',
            icon:'fa fa-user',
            textValue:'Ajouter enseignant'
        },
        {
            link:'/dashbord/compositions',
            icon:'fa fa-cog',
            textValue:'Programmer compos'
        },
        {
            link:'/dashbord/statitique',
            icon:'fa fa-line-chart',
            textValue:'Statistiques'
        }
    ];
    return (<LeftPane userData={props.user} linkData={linkData}/>);
}