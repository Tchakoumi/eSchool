const initState = {
    filieres: [
        { deleted: false, idFiliere:'plenty', nomFaculte:'FST', nomFiliere:'IRT', maxNiveau:'3'},
    ]
}

const filiereReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FILIERE':
            return { ...state, filieres: [...state.filieres, ...action.payload] }
        default:
            return state
    }
}

export default filiereReducer;
