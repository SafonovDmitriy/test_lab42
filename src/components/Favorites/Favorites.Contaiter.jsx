import React from 'react';
import { connect } from 'react-redux';
import { filterToFevorites } from '../Filters/Filter';
import Favorites from './Favorites';
import { filterToSearch, filterToMultiCategory, filterToPrice } from './../Filters/Filter';

const FavoritesContainer = ({ favoritesProduct, listProduct, ...props }) => {
    let showProduct=filterToFevorites(listProduct,favoritesProduct)
    showProduct=filterToSearch(showProduct,props.SearchText)
    showProduct=filterToMultiCategory(showProduct,props.categoryFilter)
    showProduct=filterToPrice(showProduct,props.priceFilters)
    return <Favorites listFavorProduct={showProduct} />
}
let mapStateToProps = (state) => {
    return {
        favoritesProduct: state.Home.favoritesProduct,
        listProduct: state.Home.product,
        priceFilters: state.Home.newPriceFilters,
        SearchText: state.Home.SearchText,
        categoryFilter:state.Home.categoryFilter,
    }

}
export default connect(mapStateToProps)(FavoritesContainer)