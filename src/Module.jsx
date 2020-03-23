import React  from 'react'
import LeftPane from './components/shared/leftPane/LeftPane'
import EtudiantLeftPane from './components/dashbord/leftPane/etudiant/EtudiantLeftPane'
import DropDownList from './components/shared/dropDownList/DropDownList'


export default function Module()  {
        return (
            <div>
                {<EtudiantLeftPane user={{}}/>}
                {<DropDownList />}

            </div>
        );
}
