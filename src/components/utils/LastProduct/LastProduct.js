import React from 'react';
import s from './LastProduct.module.css'
import { Link } from 'react-router-dom';
import TinySliderWrapper from "tiny-slider-react-wrapper";


const LastProduct = (props) => {
    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        controls: false,
        items: 3,
        center: true,
    }
    return (
        <>
            <h1>Last Products</h1>
            <TinySliderWrapper settings={settings} className={s.SlideWrapper} >


                {props.lastProduct.length === 0 ? <> 123 </> :

                    props.lastProduct.map(item => {
                        let categor = item.Category.replace(' ', '_')
                        let title = item.title.replace(' ', '_')
                        return <Link to={`/Home/${categor}/${title}`} >
                            <div className={s.lastProduct}>
                                <img alt={item.title} src={item.photo[0]} />
                                <p>{item.title}</p>
                            </div>
                        </Link>
                    })}
            </TinySliderWrapper>

        </>
    )


}
export default LastProduct