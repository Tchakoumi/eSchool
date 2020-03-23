const initState={
    connectedUser:[]
}

const connectedUserReducer=(state=initState, action)=>{
    switch(action.type){
        case 'CREATE_CONNECTED_USER':
            return{...state, connectedUser:[...action.payload]}
        default:
            return state
    }
}

export default connectedUserReducer;