import React from 'react';
import s from './Product.module.css'
import { Link } from "react-router-dom";
import StarContaner from './../../utils/Star/Star.Container';
import { Container, Row, Col } from 'react-bootstrap';

const delSpace = (stringItem = '') => {
    return stringItem.replace(/ /g, `_`)
}
export const productURL = (item, categories, defaultURL, ) => {

    let arr = []
    item.Category.map((idCat) => {
        return categories.map((categori) => {
            if (idCat === categori.id) {
                arr.push(categori.Title)
            }
            return undefined
        })

    })
    if (defaultURL === '/Home/') {
        return <Link to={`${defaultURL}${delSpace(arr[0])}/${delSpace(item.Title)}`}>{item.Title}</Link>
    }
    if (defaultURL === '/Category/') {
        return arr.map(categor => { return <Link to={`${defaultURL}${delSpace(categor)}`}>{categor}</Link> })
    }
    if (defaultURL === '/Favorites/') {
        return <></>
    }


}
const Product = (props) => {
    return (

        <Container className={s.Product}>
            <Row>
                <Col className={s.productField}>
                    <img className={s.imgProduct} alt={props.item.Title} src={props.item.Photo[0]} />
                </Col>
                <Col className={s.productField}>
                    <p className={s.Title}>
                        {productURL(props.item, props.categories, '/Home/')}
                    </p>
                </Col>
                <Col className={s.productField}>
                    <p className={s.Category}>
                        {productURL(props.item, props.categories, '/Category/')}

                    </p>
                </Col>
                <Col className={s.productField}>
                    <p className={s.Price}>{props.item.Price + ' $'}</p>
                </Col>
                <Col className={s.productField}>
                    <StarContaner className={s.Star} idProduct={props.item.id} />
                </Col>

            </Row>


        </Container >
    )
}

export default Product