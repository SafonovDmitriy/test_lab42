import React from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import { connect } from 'react-redux';
const CategoryContainer = (props) => {
    return (
        <Category {...props} />
    )
}
let mapStateToProps = (state) => {
    return {
        listProduct: state.Home.product,
        categories: state.Home.categories,
        priceFilter: state.Home.priceFilter
    }
}

export default connect(mapStateToProps)(withRouter(CategoryContainer))