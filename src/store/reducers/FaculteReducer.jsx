const initState = {
    facultes: [
        {deleted:false, idFaculte:'plentyThings', nomFaculte:'FST'},
    ]
}

const faculteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FACULTE':
            return { ...state, facultes: [...state.facultes, ...action.payload] }
        default:
            return state
    }
}

export default faculteReducer;
