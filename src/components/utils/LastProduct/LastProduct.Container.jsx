import React from 'react';
import LastProduct from './LastProduct';
import { connect } from 'react-redux';

const LastProductContainer = (props) => {

    return props.lastProduct.length !== 0 && (< LastProduct {...props} />)
}
let mapStateToProps = (state) => {
    return {
        lastProduct: state.Home.lastProduct
    }
}
export default connect(mapStateToProps)(LastProductContainer)