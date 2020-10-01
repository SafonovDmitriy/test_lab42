import React from 'react';
import { connect } from 'react-redux';
import { addFavoriteProduct, delFavoriteProduct } from '../../../Redux/Reducers/Home';
import Star from './Star';

const StarContaner = (props) => {
    return <Star {...props} />
}
let mapStateToProp = (state) => {
    return {
        favoritesProduct: state.Home.favoritesProduct,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFavoriteProduct: (idProduct) => dispatch(addFavoriteProduct(idProduct)),
        delFavoriteProduct: (idProduct) => dispatch(delFavoriteProduct(idProduct)),
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(StarContaner)