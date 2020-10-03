import React from 'react';
import CategoryFilter from './CategoryFilter';
import { connect } from 'react-redux';
import { listCategoryFilter } from './../../../Redux/Reducers/Home';

const CategoryFilterContainer = (props) => {
    return <CategoryFilter {...props}/>
}
let mapStateToProps = (state) => {
    return {
        categoty: state.Home.categories,
        categoryFilter:state.Home.categoryFilter,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        listCategoryFilter:(arrCategoryFilter)=>dispatch(listCategoryFilter(arrCategoryFilter)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryFilterContainer) 