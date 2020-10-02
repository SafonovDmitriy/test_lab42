import React from 'react';
import { connect } from 'react-redux';
import PageProduct from './PageProduct';
import { withRouter } from 'react-router-dom';
import { saveProduct } from '../../Redux/Reducers/Home';

const getInfo = (arr) => {
    return arr.map(p => {
        return <p>{p}</p>
    })
}
const PageProductsContainer = (props) => {
    props.saveProduct(props.match.params.item.replace(/_/g, " "))
    return props.selectProduct.character !== undefined && props.selectProduct.aboutProduct !== undefined ?

        < PageProduct selectProduct={props.selectProduct} getInfo={(arr)=>getInfo(arr)} />
        :
        <></>


}
let mapStateToProps = (state) => {
    return {
        selectProduct: state.Home.selectProduct,
        categories: state.Home.categories
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        saveProduct: (productTitile) => dispatch(saveProduct(productTitile))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageProductsContainer))