import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './../utils/Search/Search';
import s from './Header.module.css';

const Header = (props) => {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Home', value: '1' },
        { name: 'Favorites', value: '2' },
        { name: 'Category', value: '3' },
    ];
    let [sliderValue, setSliderValue] = useState({ min: 0, max: props.maxCount })

    const onSliderChange = (value) => {
        setSliderValue({ min: value[0], max: value[1] })
        props.priceFilter({ min: value[0], max: value[1] })
    }

    return (
        <div className={s.Wrapper}>
            <Container>
                <Row className={s.topHeader} >
                    <Col md={4}>
                        <ButtonGroup >
                            {radios.map((button, idx) => (
                                <Link to={'/' + button.name}>
                                    <Button
                                        key={idx}
                                        name="button"
                                        value={button.value}
                                        checked={radioValue === button.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {button.name}


                                    </Button>
                                </Link>

                            ))}
                        </ButtonGroup >
                    </Col>
                    <Col md={{ span: 3, offset: 5 }}>
                        <div className={s.SliderWrapper}>
                            <h3>Price Filter</h3>
                            <Range className={s.Slider} pushable={true} defaultValue={[sliderValue.min, sliderValue.max]} max={props.maxCount} onChange={(value) => onSliderChange(value)} />
                            <div className={s.mining}>
                                <div className={s.min}>{sliderValue.min}</div>
                                <div className={s.max}>{sliderValue.max}</div>
                            </div>
                        </div>
                    </Col>



                </Row>
                <Row>
                    <Col xs={2} >
                        <h3 className={s.Title}>Shop</h3>
                    </Col>
                    <Col>
                        <Search className={s.Search} />
                    </Col>



                </Row>
            </Container >
        </div >)
}
export default Header