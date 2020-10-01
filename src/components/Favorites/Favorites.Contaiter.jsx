import React from 'react';
import { connect } from 'react-redux';
import Favorites from './Favorites';

const FavoritesContainer = ({ categories, favoritesProduct, listProduct, ...props }) => {


    let listFavorProduct = []

    listProduct.map((product) => {
        return favoritesProduct.map(favor => {
            if (favor === product.id) {
                return listFavorProduct.push(product)
            }
            return undefined
        })
    })
    return <Favorites listFavorProduct={listFavorProduct} />
}
let mapStateToProps = (state) => {
    return {
        favoritesProduct: state.Home.favoritesProduct,
        listProduct: state.Home.product,
        categories: state.Home.categories
    }

}
export default connect(mapStateToProps)(FavoritesContainer)