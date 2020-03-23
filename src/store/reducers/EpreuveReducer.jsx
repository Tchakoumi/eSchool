const initState = {
    epreuves: [
        { deleted: false, subject:'IDE', type:'CC', class:'IRT3', timeAllowed:'2', questions:[ {question:'Quel est le nom de ton pere?', type:'QCM', option:["Tchakoumi", 'Kouatchoua', 'Tamen', 'Komguem'], index:1} ] },
    ]
}

const epreuveReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EPREUVE':
            return { ...state, epreuves: [...state.epreuves, ...action.payload] }
        default:
            return state
    }
}

export default epreuveReducer;
