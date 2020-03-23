import React, { Component } from 'react'
import Statistique from './shared/statistique/Statistique'
import { connect } from 'react-redux'

class AfficheNotes extends Component {

    verifyValidUser = (user) => {
        let validStudent = this.props.etudiants.filter(student => {
            return student.nomEtudiant === user
        })

        let validTeacher = this.props.enseignants.filter(teacher => {
            return teacher.nomEnseignant === user
        })

        let theUser
        if (validStudent !== 0) {
            theUser = { ...validStudent, type: 'Etudiant' }
        } else if (validTeacher !== 0) {
            theUser = { ...validTeacher, type: 'Enseignant' }
        }

        if (theUser.type !== undefined) { return theUser.idEtudiant } else return null;
    }


    fillStat = (idEtudiant) => {
        let noteEtudiant = this.props.notes.filter(noteEtudiant => {
            return noteEtudiant.nomEtudiant === idEtudiant
        })

        let dataArray = []
        console.log(noteEtudiant)
        let path = this.props.match.params.username
        console.log(path)
        noteEtudiant[0].matieres.map(notesMatiere => {
            let matiere = this.props.matieres.find(subject => {
                return subject.idMatiere === notesMatiere.idMatiere
            })
            let tempArray = { subject: matiere.nomMatiere, cc: notesMatiere.noteCC, exam: notesMatiere.noteExam, pourcentage: '52%', grade: 'D' }
            dataArray.push(tempArray)
        })

        return dataArray
    }

    showThem=()=>{
        let stats = this.fillStat(this.verifyValidUser(this.props.connectedUser))
        console.log("I am going up")
        let stat = {
            head: { subject: 'Nom du cours', cc: 'Note CC', exam: 'Note EXAM', pourcentage: 'Pourcentage', grade: 'Grade' },
            faculte: {
                faculteCourante: 'FST',
                listFaculte: ['fst', 'iea', 'fss'],
                stat: stats
            },
            filiere: {
                filiereCourante: '',
                listFiliere: [],
                stats: []
            }
        };
        return <Statistique tdata={stat.faculte.stat} thead={stat.head} />;                        

    }

    render() {
        return (
            this.showThem()
        )
    }
}

const mapStateToProps = (state) => {
    return {
        etudiants: state.etudiant.etudiants,
        enseignants: state.enseignant.enseignants,
        connectedUser: state.connectedUser.connectedUser,
        notes: state.note.notes,
        matieres: state.matiere.matieres,
        epreuves: state.epreuve.epreuves
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AfficheNotes)