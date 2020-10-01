import React from 'react';
import topTable from './../../Catalog/topTable/TopTable';
import ProductContainer from './../../Product/Product.Container';



const Category = ({ listProduct, categories, match, ...props }) => {
    console.log(listProduct)
    let idCategory
    categories.map(cat => {
        if (cat.Title === match.params.Title.replace("_", " ")) {
            return idCategory = cat.id
        }
        return undefined
    })


    return (
        <div>
            {topTable()}
            {

                listProduct.map(prod => {
                    return prod.Category.map(Categor => {

                        if (Categor === idCategory) {
                            return prod.Price >= props.priceFilter.min && prod.Price <= props.priceFilter.max && <ProductContainer item={prod} />
                        }
                        return undefined
                    })
                })
            }
        </div>
    )
}
export default Category