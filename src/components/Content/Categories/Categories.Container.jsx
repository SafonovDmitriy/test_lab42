import React from 'react';
import Categories from './Categories';
import { connect } from 'react-redux';

const CategoriesContainer = (props) => {
    return (
        <Categories categories={props.categories} />
    )
}
let mapStateToProps = (state) => {
    return {
        categories: state.Home.categories,
    }
}
export default connect(mapStateToProps)(CategoriesContainer)