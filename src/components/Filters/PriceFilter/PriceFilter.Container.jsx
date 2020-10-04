import React from 'react';
import PriceFilter from './PriceFilter';
import { connect } from 'react-redux';
import { priceFilter, newPriceFilter } from './../../../Redux/Reducers/Home';

const PriceFilterContainer = (props) => {

    const getCount = () => {
        let CountArr = Array.from(props.product, ({ Price }) => Price)
        return {
            min: CountArr.reduce((x, y) => x < y ? x : y),
            max: CountArr.reduce((x, y) => x > y ? x : y)
        }
    }
    props.priceFilters.max === 0 && props.priceFilter(getCount())
    return props.priceFilters.max !== 0 && <PriceFilter {...props} />


}
let mapStateToProps = (state) => {
    return {
        product: state.Home.product,
        priceFilters: state.Home.priceFilters,
        newPriceFilters: state.Home.newPriceFilters,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        priceFilter: price => dispatch(priceFilter(price)),
        newPriceFilter: price => dispatch(newPriceFilter(price)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceFilterContainer)