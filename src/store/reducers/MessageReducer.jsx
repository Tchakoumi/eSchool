const initState = {
    messages: [
        { deleted: false, idEtudiant:'hellowww', idEnseignant:'', message:'Svp monsieur comment ecrire un programme hello world en java?', ressource:'', matiere:'IDE', classe:'IRT3'},
    ]
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MESSAGE':
            return { ...state, messages: [...state.messages, ...action.payload] }
        default:
            return state
    }
}

export default messageReducer;
