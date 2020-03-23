import React, { Component } from 'react'
import './ConfirmOrder.css'
import '../../sharedCSS.css'
import { connect } from 'react-redux'

class ConfirmOrder extends Component {

    state = {
        location: true,
        receiver: true,
        newReceiver: false,
        product: true,
        payment: true,
        agency: true,
        domicile: false,
    }

    loadTowns = () => {
        let town = ["Bamenda", "Yaounde", "Douala", "Bafoussam", "Edea", "Garoua", "Maroua", "Buea"]
        let towns = document.getElementById('towns')
        town.map(town => {
            var option = document.createElement('option')
            option.appendChild(document.createTextNode(town))
            option.value = town
            towns.appendChild(option)
            return null
        })

        this.loadQuarters(towns.value)
    }

    changeIt = (e) => {
        let shades = document.querySelector(`#${e.target.id}`)
        // console.log(shades.classList)
        if (shades.classList.contains("fa-plus-circle")) {
            shades.classList.remove("fa-plus-circle")
            shades.classList.add("fa-minus-circle")
            this.setState({
                [e.target.id]: true
            })
        } else {
            shades.classList.remove("fa-minus-circle")
            shades.classList.add("fa-plus-circle")
            this.setState({
                [e.target.id]: false
            })
        }
    }

    loadQuarters = (town) => {
        let townQuarter = [
            { town: "Bamenda", quarter: "Binju" },
            { town: "Bamenda", quarter: "Three-corners" },
            { town: "Bamenda", quarter: "Njikwa" },
            { town: "Bamenda", quarter: "Cosmos quarter" },
            { town: "Bamenda", quarter: "quartier 3" },
            { town: "Bafoussam", quarter: "quartier 3" },
            { town: "Bafoussam", quarter: "quartier 4" },
            { town: "Bafoussam", quarter: "Nouton" },
            { town: "Yaounde", quarter: "Obili" },
            { town: "Yaounde", quarter: "Madagascar" },
            { town: "Yaounde", quarter: "Mokolo" },
        ]

        let quarters = townQuarter.filter(townQuarter => (townQuarter.town === town))

        let quarts = document.getElementById('quarters')
        quarts.options.length = 0
        quarters.map(quarter => {
            var option = document.createElement('option')
            option.appendChild(document.createTextNode(quarter.quarter))
            option.value = quarter.quarter
            quarts.appendChild(option)
            return null
        })
    }

    openSection = (e) => {
        this.setState({
            [e.target.id]: !this.state.location
        }, () => { console.log(this.state) })

    }

    productDetails = () => {
        let userId = this.props.history.location.pathname.slice(1, -8)
        let validUser = this.props.users.find(user => { return user.idUser === userId })

        if (validUser !== undefined) {
            let userCart = this.props.carts.filter(cart => { return cart.idUser === userId })
            if (userCart.length === 0) return (<label>No product in Cart</label>)
            else {
                let theProducts = userCart.map(productInCart => {
                    let product = this.props.products.find(product => { return product.idProduct === productInCart.idProduct })
                    let sizeAndPrice = this.props.productSizes.find(prodSize => { return prodSize.idProductSize === productInCart.idProductSize })
                    return (
                        <div className="productDetail">
                            <img className="thisImage" src="" alt="product" />
                            <label className="thisName">{product.nameProduct}</label>
                            <label className="thisPrice">Prix: {sizeAndPrice.price + " XAF"}</label>
                            <label className="thisPrice">Quantite: {productInCart.quantity}</label>
                        </div>
                    )
                })
                return theProducts
            }
        }
        else this.props.history.push("/signin")
    }

    calculateTotalAmount = () => {
        let userId = this.props.history.location.pathname.slice(1, -8)
        let validUser = this.props.users.find(user => { return user.idUser === userId })

        if (validUser !== undefined) {
            let userCart = this.props.carts.filter(cart => { return cart.idUser === userId })
            if (userCart.length === 0) return (
                <div className="paymentDetails">
                    <div className="totalPayable">
                        <label>Montant total a payer: </label>
                        <label className="note">0 XAF</label>
                    </div>
                </div>
            )
            else {
                let theProducts = userCart.map(productInCart => {
                    let sizeAndPrice = this.props.productSizes.find(prodSize => { return prodSize.idProductSize === productInCart.idProductSize })
                    return sizeAndPrice.price * productInCart.quantity
                })
                let finalPrice = 0
                for (let i = 0; i < theProducts.length; i++) {
                    finalPrice = finalPrice + theProducts[i]
                }
                console.log(theProducts, finalPrice)
                return (
                    <div className="paymentDetails">
                        <div className="totalPayable">
                            <label>Montant total a payer: </label>
                            <label className="note">{finalPrice + " XAF"}</label>
                        </div>
                        <label className="note">Paiement a livraison</label>
                    </div>
                )
            }
        }
        else this.props.history.push("/signin")
    }

    userDetails = () => {
        let userId = this.props.history.location.pathname.slice(1, -8)
        let validUser = this.props.users.find(user => { return user.idUser === userId })

        if (validUser !== undefined) {
            let theUser = this.props.users.find(user => { return user.idUser === userId })
            return (
                <div className="test">
                    <label>Nom: {theUser.fNameUser + " " + theUser.lNameUser}</label>
                    <label>Email: {theUser.emailUser}</label>
                    <label>Telephone: {theUser.phoneUser}</label>
                </div>
            )
        }
        else this.props.history.push("/signin")

    }

    handleLieuLivraison = (e) => {
        this.setState({
            domicile: false,
            agency: false,
            [e.target.id]: true,
        })
    }

    locationDetails = () => {
        let userId = this.props.history.location.pathname.slice(1, -8)
        let validUser = this.props.users.find(user => { return user.idUser === userId })

        if (validUser !== undefined) {
            let theUser = this.props.users.find(user => { return user.idUser === userId })
            let theQuart = this.props.quarters.find(quarter => { return quarter.idQuarter === theUser.idQuarter })
            let theTown = this.props.towns.find(town => { return town.idTown === theQuart.idTown })
            return (
                <div>
                    <form className="lieuRadio">
                        <input id="domicile" onClick={this.handleLieuLivraison} type='radio' name='lieuLivraison' />Domicile
                        <input id="agency" onClick={this.handleLieuLivraison} type='radio' name='lieuLivraison' />Agence
                    </form>
                    <form className="knownDetails">
                        <label className="hlabel">Ville: {theTown.nameTown}</label>
                        <label className="hlabel">Quartier: {theQuart.nameQuarter}</label>
                    </form>
                </div>
            )
        }
        else this.props.history.push("/signin")

    }



    render() {
        return (
            <div className="overallContainer">
                <div className="labelContainer">
                    <label className="fa fa-minus-circle faLabel" id="location" onClick={this.changeIt}>  Lieu de livraison</label>
                    {this.state.location ? (<div className="locationDetails">{this.locationDetails()}</div>) : (null)}
                    <label className="fa fa-minus-circle faLabel" id='receiver' onClick={this.changeIt}>  Reception</label>
                    {this.state.receiver ? (this.userDetails()) : (null)}
                    <label className="fa fa-minus-circle faLabel" id='product' onClick={this.changeIt}>  Produits</label>
                    {
                        this.state.product === true ? (
                            <div className="chosenProducts">
                                {this.productDetails()}
                            </div>
                        ) : (null)
                    }
                    <label className="fa fa-minus-circle faLabel" id='payment' onClick={this.changeIt}>  Paiement</label>
                    {
                        this.state.payment ? (
                            this.calculateTotalAmount()
                        ) : (null)
                    }

                    <button className="confirmButton">Confirmer la Commande</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        users: state.user.users,
        carts: state.cart.carts,
        quarters: state.quarter.quarters,
        towns: state.town.towns,
        productSizes: state.productSize.productSizes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // createCart:(cart)=>dispatch(createCart(cart))
        //     createConnectedUser:(user)=>dispatch(createConnectedUser(user))
        //     // createUserSpecial:(user)=>dispatch(createUserSpecial(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder)