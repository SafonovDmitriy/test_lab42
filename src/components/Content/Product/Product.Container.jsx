import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';

const ProductContainer = (props) => {
    return <Product {...props} />
}

let mapStateToProps = (state) => {
    return {
        categories: state.Home.categories,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)