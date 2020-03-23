const initState = {
    classes: [
        { deleted: false, idClasse: 'hellow', niveau:'3', nomFiliere:'IRT', modules:[{idModule:'hellowwww', credit:'8'}] },
    ]
}

const classeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CLASSE':
            return { ...state, classes: [...state.classes, ...action.payload] }
        default:
            return state
    }
}

export default classeReducer;
