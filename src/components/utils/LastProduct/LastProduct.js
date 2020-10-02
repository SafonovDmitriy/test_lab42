import React from 'react';
import s from './LastProduct.module.css'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TinySlider from "tiny-slider-react";

const LastProduct = (props) => {
    const settings = {
        lazyload: true,
        items: 4,
    }

    return (
        <Container className={s.lastWrapper}>
            <h1>Last Products</h1>
            <Row>
                <TinySlider settings={settings}  >
                    {props.lastProduct.map((item, index) => {
                        let categor = item.Category.replace(/ /g, '_')
                        let title = item.title.replace(/ /g, '_')
                        return <>
                            <Link key={index} to={`/Home/${categor}/${title}`} >
                                <Col className={s.lastProduct}>

                                    <img alt={item.title} src={item.photo[0]} />
                                    <span>{item.title}</span>
                                </Col>

                            </Link>

                        </>

                    })}


                </TinySlider>
            </Row>






        </Container>
    )


}
export default LastProduct