import React from 'react';
import s from './Catalog.module.css'
import topTable from './topTable/TopTable';
import ProductContainer from './../Product/Product.Container';
const Catalog = (props) => {

    return (
        <div className={s.Wrapper}>
            <h1 className={s.Title}>Catalog</h1>
            <div className={s.ListProduct}>
                {topTable()}
                {props.SearchArr.length === 0 ?
                    props.SearchText !== undefined && props.listProduct === [] ?
                        <p className={s.notFound}>Product not found</p>
                        :
                        props.listProduct.map((item) => {
                            return props.priceFilters.max !== 0 ?
                                item.Price >= props.priceFilters.min && item.Price <= props.priceFilters.max && <ProductContainer item={item} /> : <ProductContainer item={item} />

                        })



                    :
                    props.SearchArr.map((item) => {
                        return props.priceFilters.max !== 0 ? item.Price >= props.priceFilters.min && item.Price <= props.priceFilters.max && <ProductContainer item={item} /> : <ProductContainer item={item} />
                    })

                }
            </div>
        </div>
    )
}


export default Catalog