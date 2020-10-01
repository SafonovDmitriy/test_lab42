import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { priceFilter } from './../../Redux/Reducers/Home';

const HeaderContainer = (props) => {
    let maxCount = 0
    props.product.map(prod => {
        if (prod.Price > maxCount) {
            maxCount = prod.Price
        } return undefined

    })
    props.priceFilter({ min: 0, max: maxCount })
    return (
        <Header {...props} maxCount={maxCount} />
    )
}
let mapStateToProps = (state) => {
    return {
        product: state.Home.product
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        priceFilter: (price) => dispatch(priceFilter(price))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)