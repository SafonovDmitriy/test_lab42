import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { updateState, filterClear } from '../../Redux/Reducers/Home';

const HeaderContainer = (props) => {
    let favoritesProduct = localStorage.getItem('favoritesProduct')
    let lastProduct = localStorage.getItem('lastProduct')
    props.updateState(JSON.parse(favoritesProduct), JSON.parse(lastProduct))
    return (
        <Header {...props} />
    )
}
let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = dispatch => {
    return {
        updateState: (newFavoritesProduct, lastProduct) => dispatch(updateState(newFavoritesProduct, lastProduct)),
        filterClear: () => dispatch(filterClear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)