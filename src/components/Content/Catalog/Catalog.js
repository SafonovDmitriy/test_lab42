import React from 'react';
import s from './Catalog.module.css'
import topTable from './topTable/TopTable';
import ProductContainer from './../Product/Product.Container';
import { filterToPrice, filterToSearch, filterToMultiCategory } from './../../Filters/Filter';
const Catalog = (props) => {
    let showProduct = filterToPrice(props.listProduct, props.priceFilters)
    showProduct=filterToSearch(showProduct,props.SearchText)
    showProduct=filterToMultiCategory(showProduct,props.categoryFilter)
    return (
        <div className={s.Wrapper}>
            <h1 className={s.Title}>Catalog</h1>
            <div className={s.ListProduct}>
                {topTable()}
                {showProduct.map(product => <ProductContainer item={product} />)}
            </div>
        </div>
    )
}


export default Catalog