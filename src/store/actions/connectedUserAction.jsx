export const createConnectedUser=(connectedUser)=>{
    return (dispatch)=>{
        //make async call to database
        dispatch({type:'CREATE_CONNECTED_USER', payload:connectedUser })
    }
};

// export const deleteConnectedUser=(dispatch({type:'DELETE_CONNECTED_USER'}))
