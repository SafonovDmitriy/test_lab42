import React from 'react';
import s from './topTable.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const topTable = () => {
    return (
        <Container className={s.AboutProduct}>
            <Row>
                <Col><p>Photo</p></Col>
                <Col><p>Title</p></Col>
                <Col><p>Category</p></Col>
                <Col><p>Price</p></Col>
                <Col><p>Subscribe</p></Col>
            </Row>
        </Container>
    )

}
export default topTable