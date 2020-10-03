import React from 'react';
import s from './Catalog.module.css'
import topTable from './topTable/TopTable';
import ProductContainer from './../Product/Product.Container';
import { filterToPrice, filterToSearch, filterToMultiCategory } from './../../Filters/Filter';
import NotFound from './../../utils/NotFound/NotFound';
import { Row } from 'react-bootstrap';
const Catalog = (props) => {
    let showProduct = filterToPrice(props.listProduct, props.priceFilters)
    showProduct = filterToSearch(showProduct, props.SearchText)
    showProduct = filterToMultiCategory(showProduct, props.categoryFilter)
    return (
        <div className={s.Wrapper}>
            <h1 className={s.Title}>Catalog</h1>
            <div className={s.ListProduct}>
                {topTable()}
                {showProduct.length !== 0 ? showProduct.map(product => <ProductContainer item={product} />) : <Row><NotFound /></Row>}
            </div>
        </div>
    )
}


export default Catalog