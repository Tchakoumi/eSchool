const initState = {
    etudiants: [
        { deleted: false, idEtudiant: 'hellowww', idClasse:'hellow', nomEtudiant: 'Tchapleu', prenomEtudiant:'Vidal', emailEtudiant:'tchapleu@gmail.com', pwd: 'lolita' },
    ]
}

const etudiantReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ETUDIANT':
            return { ...state, etudiants: [...state.etudiants, ...action.payload] }
        default:
            return state
    }
}

export default etudiantReducer;
