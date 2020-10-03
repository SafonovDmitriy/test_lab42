import React from 'react';
import topTable from './../../Catalog/topTable/TopTable';
import ProductContainer from './../../Product/Product.Container';
import { filterToPrice, filterToCategory, filterToSearch } from './../../../Filters/Filter';



const Category = ({ listProduct, categories, match, ...props }) => {
    let showProduct = filterToPrice(listProduct, props.priceFilter)
    showProduct = filterToCategory(showProduct, categories, match.params)
    showProduct = filterToSearch(showProduct, props.SearchText)
    return (
        <div>
            {topTable()}
            {showProduct.map(product => <ProductContainer item={product} />)}
        </div>
    )
}
export default Category