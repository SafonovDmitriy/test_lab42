import React from 'react';
import topTable from './../../Catalog/topTable/TopTable';
import ProductContainer from './../../Product/Product.Container';
import { filterToPrice, filterToCategory, filterToSearch } from './../../../Filters/Filter';
import { Row } from 'react-bootstrap';
import NotFound from './../../../utils/NotFound/NotFound';



const Category = ({ listProduct, categories, match, ...props }) => {
    let Title = match.params.Title.replace(/_/g, " ")
    let showProduct = filterToPrice(listProduct, props.priceFilter)
    showProduct = filterToCategory(showProduct, categories, match.params)
    showProduct = filterToSearch(showProduct, props.SearchText)
    return (
        <>
            {topTable(Title)}
            {showProduct.length !== 0 ? showProduct.map(product => <Row><ProductContainer item={product} /></Row>) : <Row><NotFound /></Row>}
        </>
    )
}
export default Category