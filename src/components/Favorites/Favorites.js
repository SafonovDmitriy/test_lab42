import React from 'react';
import { Row } from 'react-bootstrap';
import ProductContainer from './../Content/Product/Product.Container';
import topTable from './../Content/Catalog/topTable/TopTable';
import NotFound from './../utils/NotFound/NotFound';

const Favorites = (props) => {
    const showListProduct = () => {
        return props.listFavorProduct.map(product => {
            return <ProductContainer item={product} />
        })
    }

    return <>
        {
            props.listFavorProduct.length !== 0 ? <>{topTable("Favorites")}<Row>{showListProduct()}</Row></> :
                <Row><NotFound /></Row>
        }</>




}
export default Favorites