import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import s from './LastProduct.module.css';

class LastProduct extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
            autoplay:true,
            slide: 'Col',
        };

        return (<>
            <h1>Last Products</h1>

            <Slider {...settings}>
                    {this.props.lastProduct.map((item, index) => {
                        let categor = item.Category.replace(/ /g, '_')
                        let title = item.title.replace(/ /g, '_')
                        return <Col className={s.lastProduct}>
                            <Link key={index} to={`/Home/${categor}/${title}`} >
                                <img alt={item.title} src={item.photo[0]} />
                                <label>{item.title}</label>
                            </Link>
                        </Col>

                    })}
            </Slider>

        </>


        )
    }
}
export default LastProduct