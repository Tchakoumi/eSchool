const initState = {
    devoirs: [
        { deleted: false, dateDonne: '12/03/2020', echeance: '15/03/2020', matiere: 'IDE', refDevoir: 'devoir_IRT3_12_03_2020.pdf', srcCorrige:'corrige_IRT3_12_03_2020.pdf', refRessourceEtudiant:'soumis_devoir_Wangun.pdf'},
    ]
}

const devoirReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DEVOIR':
            return { ...state, devoirs: [...state.devoirs, ...action.payload] }
        default:
            return state
    }
}

export default devoirReducer;
