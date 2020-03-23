const initState = {
    modules: [
        { deleted: false, idModule: 'hellowwww', nomModule: 'Informatique III', matieres:[ {nomMatiere:'IDE', idEnseignant:'helloww', nbrHrs:'12', poids:'0.5', refSuppot:'IDE_IRT3_2020'}, ]},
    ]
}

const moduleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_MODULE':
            return { ...state, modules: [...state.modules, ...action.payload] }
        default:
            return state
    }
}

export default moduleReducer;
