import React from 'react';
import topTable from './../../Catalog/topTable/TopTable';
import ProductContainer from './../../Product/Product.Container';
import { filterToPrice, filterToCategory, filterToSearch } from './../../../Filters/Filter';
import { Row } from 'react-bootstrap';
import NotFound from './../../../utils/NotFound/NotFound';



const Category = ({ listProduct, categories, match, ...props }) => {
    let showProduct = filterToPrice(listProduct, props.priceFilter)
    showProduct = filterToCategory(showProduct, categories, match.params)
    showProduct = filterToSearch(showProduct, props.SearchText)
    return (
        <div>
            {topTable()}
            {showProduct.length !== 0 ? showProduct.map(product => <ProductContainer item={product} />) : <Row><NotFound /></Row>}
        </div>
    )
}
export default Category