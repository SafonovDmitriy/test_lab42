import React from 'react';
import { Row } from 'react-bootstrap';
import { filterToMultiCategory, filterToPrice, filterToSearch } from './../../Filters/Filter';
import NotFound from './../../utils/NotFound/NotFound';
import ProductContainer from './../Product/Product.Container';
import topTable from './topTable/TopTable';
const Catalog = (props) => {
    let showProduct = filterToPrice(props.listProduct, props.priceFilters)
    showProduct = filterToSearch(showProduct, props.SearchText)
    showProduct = filterToMultiCategory(showProduct, props.categoryFilter)
    return (<>
        {topTable("Catalog")}
        {showProduct.length !== 0 ? showProduct.map(product => <Row><ProductContainer item={product} /></Row>) : <Row><NotFound /></Row>}
    </>
    )
}


export default Catalog