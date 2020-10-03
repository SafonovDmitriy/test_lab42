import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from './Categories.module.css';

const Categories = (props) => {


    return <div className={s.Category}>
        {
            props.categories.map(category => {
                return <Row ><Link to={"/Category/" + category.Title.replace(/ /g, "_")}> {category.Title + ' '} </Link></Row>
            })
        }
        </div>


}

export default Categories