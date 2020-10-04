import { Multiselect } from 'multiselect-react-dropdown';
import React from 'react';
import s from './Category.module.css'

const CategoryFilter = (props) => {
    const onSelect = (selectedList) => {
        props.listCategoryFilter(selectedList)
    }
    const onRemove = (selectedList) => {
        props.listCategoryFilter(selectedList)
    }
    return <div className={s.CategoryFilter}>
        <h3>Category Filter</h3>
        <Multiselect
            placeholder="Press to Select"
            options={props.categoty}
            selectedValues={props.categoryFilter}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="Title"
            closeIcon='cancel'
        />
    </div>
}
export default CategoryFilter