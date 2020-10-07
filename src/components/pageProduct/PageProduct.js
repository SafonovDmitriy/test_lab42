import React from 'react';
import s from './PageProduct.module.css'
import Photo from './Photo/Photo';
import LastProductContainer from './../utils/LastProduct/LastProduct.Container';
import { Container, Row, Col } from 'react-bootstrap';
import StarContaner from './../utils/Star/Star.Container';

const PageProduct = (props) => {
    return (<>
        <Container>
            <Row>
                <Col md={5}>
                    <Photo photo={props.selectProduct.Photo} />
                    <h1 className={s.Price}>{"Price: " + props.selectProduct.Price + " $"}</h1>
                    <StarContaner idProduct={props.selectProduct.id} />
                </Col>

                <Col sm={1}></Col>
                <Col >
                    <Row><h1> {props.selectProduct.Title}</h1> </Row>
                    <Row><h3>About Product</h3></Row>
                    <Row>  <div>{props.getInfo(props.selectProduct.aboutProduct)}</div></Row>
                    <Row>  <h3>Сharacteristic</h3></Row>
                    <Row>  <div>{props.getInfo(props.selectProduct.character)}</div></Row>
                </Col>
            </Row>







        </Container>
        <LastProductContainer />


    </>
    )
}
export default PageProduct