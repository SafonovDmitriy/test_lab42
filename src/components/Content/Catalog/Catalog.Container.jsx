import React from 'react';
import Catalog from './Catalog';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CatalogContainer = (props) => {
    return (<Catalog
        {...props}
    />)
}
let mapStateToProps = (state) => {
    return {
        listProduct: state.Home.product,
        categories: state.Home.categories,
        SearchText: state.Home.SearchText,
        priceFilters: state.Home.newPriceFilters,
        categoryFilter:state.Home.categoryFilter,
    }
}


export default connect(mapStateToProps)(withRouter(CatalogContainer))