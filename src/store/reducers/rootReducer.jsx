import { combineReducers } from 'redux';
import classeReducer from './ClasseReducer';
import compositionReducer from './CompositionReducer';
import connectedUserReducer from './connectedUserReducer';
import devoirReducer from './DevoirReducer';
import enseignantReducer from './EnseignantReducer';
import epreuveReducer from './EpreuveReducer';
import etudiantReducer from './EtudiantReducer';
import faculteReducer from './FaculteReducer';
import filiereReducer from './FiliereReducer';
import matiereReducer from './MatiereReducer';
import messageReducer from './MessageReducer';
import moduleReducer from './ModuleReducer';
import noteReducer from './NoteReducer';

const rootReducer = combineReducers({
    classe:classeReducer,
    composition:compositionReducer,
    connectedUser:connectedUserReducer,
    devoir:devoirReducer,
    enseignant:enseignantReducer,
    epreuve:epreuveReducer,
    etudiant:etudiantReducer,
    faculte:faculteReducer,
    filiere:filiereReducer,
    matiere:matiereReducer,
    message:messageReducer,
    module:moduleReducer,
    note:noteReducer
})

export default rootReducer;