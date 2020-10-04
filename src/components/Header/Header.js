import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryFilterContainer from './../Filters/CategoryFilter/CategiryFilter.Container';
import PriceFilterContainer from './../Filters/PriceFilter/PriceFilter.Container';
import Search from './../utils/Search/Search';
import s from './Header.module.css';



const Header = (props) => {

    const [radioValue, setRadioValue] = useState('1');
    let [toogleFilter, setToggleFilter] = useState(false);
    const menuButtons = [
        { name: 'Home', value: '1' },
        { name: 'Favorites', value: '2' },
        { name: 'Category', value: '3' },
    ];
    const showLink = () => {
        return (
            menuButtons.map((button, idx) => (
                <Link to={'/' + button.name}>
                    <Button
                        key={idx}
                        name="button"
                        value={button.value}
                        checked={radioValue === button.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}>
                        {button.name}
                    </Button>
                </Link>
            ))
        )
    }
    const toggleForFilter = () => {
        return toogleFilter ?
            <>
                <Row>
                    <Col><PriceFilterContainer /></Col>
                    <Col><CategoryFilterContainer /></Col>
                </Row>
                <Row>
                    <Button className={s.Clear} onClick={() => props.filterClear()} variant="secondary">Clear all filters</Button>
                </Row>

                <div onClick={() => setToggleFilter(false)}>
                    <hr />
                    <div className={s.forFilter} >Close Filters</div>
                </div>
            </>
            :
            <>   <div onClick={() => setToggleFilter(true)}>
                <hr />
                <div className={s.forFilter} >Open Filters</div>
            </div>
            </>
    }
    return (
        <div className={s.Wrapper}>
            <Container>

                <Navbar bg="#122538" variant="dark">
                    <Row className={s.Wrapper}>
                        <Col md={1} className={s.Margin}>
                            <Link to='/Home'>
                                <Navbar.Brand >Shop</Navbar.Brand>
                            </Link>
                        </Col>
                        <Col  md={4} className={s.Margin}>
                            <Nav >
                                <ButtonGroup toggle>
                                    {showLink()}
                                </ButtonGroup >
                            </Nav>
                        </Col>
                        
                        <Col  className={s.Search}>
                            <Search />
                        </Col>
                    </Row>
                </Navbar>
            </Container >
            <Container>{toggleForFilter()}</Container>


        </div >)
}
export default Header