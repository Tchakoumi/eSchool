const initState = {
    matieres: [
        { deleted: false, idMatiere: 'hello', nomMatiere:'IDE'},
    ]
}

const matiereReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MATIERE':
            return { ...state, matieres: [...state.matieres, ...action.payload] }
        default:
            return state
    }
}

export default matiereReducer;
