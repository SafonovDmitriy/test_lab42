import React from 'react';
import ProductContainer from './../Content/Product/Product.Container';

const Favorites = (props) => {
    const showListProduct = () => {
        return props.listFavorProduct.map(product => {
            return <ProductContainer item={product} />
        })
    }

    return props.listFavorProduct.length !== 0 ? <>{showListProduct()}</> : <h1 >Favorit product not found</h1>
}



export default Favorites