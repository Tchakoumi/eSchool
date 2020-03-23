const initState = {
    compositions: [
        { deleted: false, idEtudiant: 'hellowww', propositions:[{questionNumber:'1', proposedAnswer:'Kouatchoua'}] },
    ]
}

const compositionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_COMPOSITION':
            return { ...state, compositions: [...state.compositions, ...action.payload] }
        default:
            return state
    }
}

export default compositionReducer;
