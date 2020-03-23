import React, {Component} from 'react';
import './Forum.css'
import HeaderCours from './headerCours';
import SupportCours from './SupportCours';
import Chat from './Chat';


class Forum extends Component
{
    constructor()
    {
        super();
        this.data={
            currentUser:{
                typeCompte:'Etu',
                name:'Cedric'
            },
            enseignant:'Wangun Parfait',
            cours:'IDE',
            support:[
                {
                    nom:'fichier',
                    type:'pdf',
                    link:''
                }
            ]
        };
    }
    render()
    {     
        return  (
            <div className="container forum">
                <div className="row">
                    <HeaderCours enseignant={this.data.enseignant} cours={this.data.cours} live={true} />
                        
                    <SupportCours fileName={this.data.support.nom} fileLink={this.data.support.link} />
                </div>  
                <div className="row">
                    <Chat currentUser={this.data.currentUser}/>
                </div>             
            </div>
        );
    }
}

export default Forum
