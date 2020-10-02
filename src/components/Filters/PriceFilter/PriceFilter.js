import React, { useState } from 'react';
import { Range } from 'rc-slider';
import s from './PriceFilter.module.css'

const PriceFilter = (props) => {

    const [count, setCount] = useState({ ...props.priceFilters })

    const saveValue = (value) => {
        setCount({ min: value[0], max: value[1] })
        props.newPriceFilter(count)

    }
    return (
        <div className={s.SliderWrapper}>
            <h3>Price Filter</h3>
            <Range
                className={s.Slider}
                pushable={true}
                defaultValue={[count.min, count.max]}
                max={props.priceFilters.max}
                onChange={(value) => saveValue(value)} />

            <div className={s.mining}>
                <div className={s.min}>{count.min}</div>
                <div className={s.max}>{count.max}</div>
            </div>
        </div>
    )
}
export default PriceFilter