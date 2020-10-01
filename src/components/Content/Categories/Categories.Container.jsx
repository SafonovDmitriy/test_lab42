import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const CategoriesContainer = (props) => {
    return (
        <Categories categories={props.categories} />
    )
}
let mapStateToProps = (state) => {
    return {
        categories: state.Home.categories
    }
}
export default connect(mapStateToProps)(withRouter(CategoriesContainer))