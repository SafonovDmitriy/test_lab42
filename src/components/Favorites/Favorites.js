import React from 'react';
import { Row } from 'react-bootstrap';
import ProductContainer from './../Content/Product/Product.Container';
import topTable from './../Content/Catalog/topTable/TopTable';

const Favorites = (props) => {
    const showListProduct = () => {
        return props.listFavorProduct.map(product => {
            return <ProductContainer item={product} />
        })
    }

    return <>
        {
            props.listFavorProduct.length !== 0 ? <>{topTable()}{showListProduct()}</> :
                <Row><h1 >Favorit product not found</h1></Row>
        }</>




}
export default Favorites