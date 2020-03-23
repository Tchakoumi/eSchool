import React, {Component} from 'react'
import {Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CompositionList from './compositionList/CompositionList';
import Epreuve from './epreuve/Epreuve';
import Forum from './forum/Forum';

import EtudiantLeftPane from './leftPane/etudiant/EtudiantLeftPane';
import EnseignantLeftPane from './leftPane/enseignant/EnseignantLeftPane';
import AdminLeftPane from './leftPane/admin/AdminLeftPane';
import DropDownListItem from './../shared/dropDownList/DropDownList';
import StatistiquePageAdmin from './statistique/StatistiquePageAdmin';
import Statistique from './../shared/statistique/Statistique';


class Dashbord extends Component
{
    constructor(props)
    {
        super(props);
        this.data={
            user:{

            },
            page_name:''
        };
    }

    connectedUser = this.props.connectedUser;
    // type, nom, prenom,

    verifyValidUser = (user) => {
        let validStudent = this.props.etudiants.filter(student => {
            return student.nomEtudiant === user
        })

        let validTeacher = this.props.enseignants.filter(teacher=>{
            return teacher.nomEnseignant === user
        })

        let theUser
        if(validStudent !==0){
            theUser={...validStudent, type:'Etudiant'}
        }else if(validTeacher !==0){
            theUser={...validTeacher, type:'Enseignant'}
        }

        if (theUser.type !== undefined) { return theUser.idEtudiant }else return null;
    }

    fillStat =(idEtudiant)=>{
        let noteEtudiant = this.props.notes.filter(noteEtudiant=>{
            return noteEtudiant.nomEtudiant === idEtudiant
        })

        let dataArray = []
        console.log(noteEtudiant)
        let path = this.props.match.params.username
        console.log(path)
        noteEtudiant[0].matieres.map(notesMatiere=>{
            let matiere = this.props.matieres.find(subject=>{
                return subject.idMatiere === notesMatiere.idMatiere
            })
            let tempArray={subject:matiere.nomMatiere, cc:notesMatiere.noteCC, exam:notesMatiere.noteExam, pourcentage:'52%', grade:'D'}
            dataArray.push(tempArray)
        })

        return dataArray
    }

    checkNavBar()
    {
        if(this.data.user.type === "Etudiant")    return <EtudiantLeftPane user={this.data.user}/>;
        else if(this.data.user.type === "Enseignant") return <EnseignantLeftPane user={this.data.user}/>;
        else if(this.data.user.type === "Admin") return <AdminLeftPane user={this.data.user}/>;
        else return <Redirect to='/signin' />;
    }

    getAllCompos=()=>{
        let data =[]
        let path = this.props.match.params.username
        this.props.epreuves.map(epreuve=>{
            let tempObj = {nomMatiere: epreuve.subject, type:epreuve.type, link:`/dashboard/${path}/${epreuve.subject}`}
            data.push(tempObj)
        })
        return data
    }

    checkMainContent()
    {
                    // let stats = this.fillStat(this.verifyValidUser(this.props.connectedUser))
                    // console.log("I am going up")
                    // let stat = {
                    //     head: {subject:'Nom du cours', cc:'Note CC', exam:'Note EXAM', pourcentage:'Pourcentage', grade:'Grade'},
                    //     faculte: {
                    //         faculteCourante: 'FST',
                    //         listFaculte: ['fst', 'iea', 'fss'],
                    //         stat: stats
                    //     },
                    //     filiere: {
                    //         filiereCourante: '',
                    //         listFiliere: [],
                    //         stats: []
                    //     }
                    // };
                    // return <Statistique tdata={stat.faculte.stat} thead={stat.head} />;                        

                    {/* Liste des compos */}
                    
                    let data=this.getAllCompos()
                    return <CompositionList dataList={data}/>;

        //         break;
        //     case 'enseignant':
        //         if(this.data.user.type==="Admin") return '';
        //         else return <Redirect to='/dashbord/404' />;
        //         break;
        //     case 'modules':
        //         if(this.data.user.type==="Etudiant")    
        //         {
        //             let data=[];
        //             return <DropDownListItem dataList={data}/>;
        //         }
        //         else return <Redirect to='/dashbord/404' />;
        //         break;
        //     case 'devoirs':
        //         if(this.data.user.type==="Etudiant")    
        //         {
        //             let data=[];
        //             return '';
        //         }
        //         else return <Redirect to='/dashbord/404' />;
        //         break;
            
        // }
    }
    render()
    {
        return (
            // <div className="row">
            //     <div className="col-sm-4 col-md-4">
            //         {this.checkNavBar()}
            //     </div>
            //     <div className="col-sm-8 col-md-8">
            //         <div className="container">
            //         <div className="row">
            //             <span>{this.props.page_name}</span>
            //         </div>
                        this.checkMainContent()
            //         </div>
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        etudiants: state.etudiant.etudiants,
        enseignants: state.enseignant.enseignants,
        connectedUser: state.connectedUser.connectedUser,
        notes: state.note.notes,
        matieres: state.matiere.matieres,
        epreuves:state.epreuve.epreuves
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(Dashbord)