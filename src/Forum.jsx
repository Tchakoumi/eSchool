import React, { Component } from 'react'
import LeftPane from './components/shared/leftPane/LeftPane'
import EtudiantLeftPane from './components/dashbord/leftPane/etudiant/EtudiantLeftPane'
import FormComp from './components/dashbord/forum/Forum';


export default function Forum (){
        
    return (
        <div>
            {console.log("test")}
                {<EtudiantLeftPane user={{}}/>}
            {<FormComp />}

            </div>
        )
}
