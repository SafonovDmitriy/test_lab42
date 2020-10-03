export const filterToPrice = (listProduct, priceFilter) => {
    let arrAfterFilterToPrice = []
    listProduct.map(product => {
        if (priceFilter.max !== 0) {
            if (product.Price >= priceFilter.min && product.Price <= priceFilter.max) {
                arrAfterFilterToPrice.push(product)
            }
            return undefined
        } else {
            arrAfterFilterToPrice.push(product)
        }
        return undefined
    })
    return arrAfterFilterToPrice
}

export const filterToCategory = (listProduct, categories, params) => {
    let arrAfterFilterToCategory = []
    categories.map(category => {
        if (category.Title === params.Title.replace(/_/g, " ")) {
            return listProduct.map(product => {
                return product.Category.map(idCategory => {
                    if (idCategory === category.id) {
                        arrAfterFilterToCategory.push(product)
                    }
                    return undefined
                })
            })
        }
        return undefined
    })
    return arrAfterFilterToCategory
}

export const filterToSearch = (listProduct, SearchText) => {
    let arrAfterFilterToSearch = []
    if (SearchText === undefined) {
        return listProduct
    }
    listProduct.map(product => {
        if (product.Title.toUpperCase().indexOf(SearchText.toUpperCase()) !== -1) {
            arrAfterFilterToSearch.push(product)

        }
        return undefined
    })
    return arrAfterFilterToSearch
}

export const filterToFevorites = (listProduct, listFevoritesProduct) => {
    if (listFevoritesProduct === []) {
        return []
    } else {
        let arrAfterFilterToFevorites = []
        listProduct.map((product) => {
            return listFevoritesProduct.map(favoritProduct => {
                if (favoritProduct === product.id) {
                    arrAfterFilterToFevorites.push(product)
                }
                return undefined
            })
        })
        return arrAfterFilterToFevorites
    }
}

export const filterToMultiCategory = (listProduct, listSelectCategory) => {
    let listSelect = Array.from(listSelectCategory, ({ id }) => id)
    let arrAfterFilterToMultiCategory = []
    if (listSelectCategory.length === 0) {
        return listProduct
    } else {
        listProduct.map(product => {
            let Counter = 0
            listSelect.map(idCategory => {
                if (product.Category.includes(idCategory)) {
                    Counter++;
                }
                return undefined
            })
            if (Counter === listSelect.length) {
                arrAfterFilterToMultiCategory.push(product)
            }
            Counter = 0
            return undefined
        })
    }
    return arrAfterFilterToMultiCategory
}









