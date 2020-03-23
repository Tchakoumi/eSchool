const initState = {
    enseignants: [
        { deleted: false, idEnseignant:'helloww', nomEnseignant:'Wangun', pwd:'lolita'},
    ]
}

const enseignantReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ENSEIGNANT':
            return { ...state, enseignants: [...state.enseignants, ...action.payload] }
        default:
            return state
    }
}

export default enseignantReducer;
