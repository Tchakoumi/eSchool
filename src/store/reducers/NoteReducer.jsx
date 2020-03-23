const initState = {
    notes: [
        { deleted: false, idEtudiant: 'hellowww', matieres:[{idMatiere:'hello', noteCC:'12', noteExam:'12'}] },
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            return { ...state, notes: [...state.notes, ...action.payload] }
        default:
            return state
    }
}

export default noteReducer;
