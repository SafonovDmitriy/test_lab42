import { Range } from 'rc-slider';
import React from 'react';
import s from './PriceFilter.module.css';

const PriceFilter = (props) => {

    const saveValue = (value) => {
        props.newPriceFilter({ min: value[0], max: value[1] })
    }
    return (
        <div className={s.SliderWrapper}>
            <h3>Price Filter</h3>
            <Range
                className={s.Slider}
                pushable={true}
                defaultValue={[props.newPriceFilters.min, props.newPriceFilters.max]}
                max={props.priceFilters.max}
                values={[props.newPriceFilters]}
                onChange={(value) => saveValue(value)} />

            <div className={s.mining}>
                <div className={s.min}>{props.newPriceFilters.min}</div>
                <div className={s.max}>{props.newPriceFilters.max}</div>
            </div>
        </div>
    )
}
export default PriceFilter