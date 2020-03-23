
export const createEtudiant = etudiant => {
  return dispatch => {
    //make async call to database
    // firebase.firestore().collection('cart').doc(cart[0].idUser).set({...cart})
    // .then(() =>{
    dispatch({ type: "CREATE_ETUDIANT", payload: etudiant });
    // }).catch((err) => {
    //     dispatch({ type: 'CREATE_CART_ERROR', err });
    // })
  };
};
