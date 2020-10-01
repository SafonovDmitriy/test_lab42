import React from 'react';
import s from './PageProduct.module.css'
import Photo from './Photo/Photo';
import LastProductContainer from './../utils/LastProduct/LastProduct.Container';

const PageProduct = (props) => {
    return (<>
        <div className={s.Wrapper}>
            <div className={s.Image}>
                <Photo photo={props.selectProduct.Photo} />
                <h1 className={s.Price}>{"Price: " + props.selectProduct.Price + " $"}</h1>
            </div>
            <div className={s.inform}>
                <h1> {props.selectProduct.Title}</h1>
                <h3>About Product</h3>
                <div>{props.getInfo(props.selectProduct.aboutProduct)}</div>
                <h3>Сharacteristic</h3>
                <div>{props.getInfo(props.selectProduct.character)}</div>
                <div></div>
            </div>
        </div>
        <div className={s.lastProduct}>
            <LastProductContainer />
        </div>
    </>
    )
}
export default PageProduct