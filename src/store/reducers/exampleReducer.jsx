const initState = {
    products: [
        { deleted: false, details: "Samsung TV 42.", mainImageRef: [{},{}], evaluation: 5, idBrand: "bhRJx", idSubCategory: "cQo7r", idProduct: "mmB", idProvider: "keh", nameProduct: "Samsung TV", numberOfVotes: 6 },
        { deleted: false, details: "Samsung TV 42.", mainImageRef: "TO9aB.jpeg", evaluation: 5, idBrand: "bhRJx", idSubCategory: "cQo7r", idProduct: "mma", idProvider: "keh", nameProduct: "Samsung TV", numberOfVotes: 6 },
        { deleted: false, details: "Samsung TV 42.", mainImageRef: "TO9aB.jpeg", evaluation: 5, idBrand: "bhRJx", idSubCategory: "cQo7r", idProduct: "mmb", idProvider: "keh", nameProduct: "Samsung TV", numberOfVotes: 6 },
        { deleted: false, details: "Samsung TV 42.", mainImageRef: "TO9aB.jpeg", evaluation: 5, idBrand: "bhRJx", idSubCategory: "cQo7r", idProduct: "mmc", idProvider: "keh", nameProduct: "Samsung TV", numberOfVotes: 6 },
    ]
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CART':
            return { ...state, carts: [...state.carts, ...action.payload] }
        default:
            return state
    }
}

export default cartReducer;
