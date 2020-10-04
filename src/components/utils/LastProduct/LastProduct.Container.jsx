import React from 'react';
import LastProduct from './LastProduct';
import { connect } from 'react-redux';

const LastProductContainer = (props) => {
    const settings = {
        lazyload: true,
        items: 4,
    }

    return props.lastProduct.length !== 0 && (< LastProduct {...props} settings={settings} />)
}
let mapStateToProps = (state) => {
    return {
        lastProduct: state.Home.lastProduct
    }
}
export default connect(mapStateToProps)(LastProductContainer)