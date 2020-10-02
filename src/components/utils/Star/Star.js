import React from 'react';
import s from './Star.module.css'
const Star = (props) => {
    let boolStar = false
    props.favoritesProduct.map(prod => {
        if (prod === props.idProduct) {
            return boolStar = true
        } else {
            return undefined
        }

    })
    let classNames = boolStar === false ? s.clipEach + ' ' + s.borderStyleThin : s.active + ' ' + s.borderStyleThin
    return <div >
        <div className={s.clipWrap}>
            <div onClick={boolStar === true ? () => props.delFavoriteProduct(props.idProduct) : () => props.addFavoriteProduct(props.idProduct)} className={classNames}>
            </div>
        </div>
        <svg className={s.clipSvg} >
            <defs >
                <clipPath id="octagon-clip" clipPathUnits="objectBoundingBox">
                    <polygon points="0.5 0, 0.61 0.35, 0.98 0.35, 0.68 0.57, 0.79 0.91, 0.5 0.7, 0.21 0.91, 0.32 0.57,0.02 0.35, 0.39 0.35" />
                </clipPath>
            </defs>
        </svg>

    </div >
}
export default Star