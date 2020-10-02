import React from 'react';
import s from './Categories.module.css'
import { Link } from 'react-router-dom';

const Categories = (props) => {
    return (
        <div className={s.Wrapper}>
            {props.categories.map(category => {
                return <div className={s.Category}><Link to={"/Category/" + category.Title.replace(/ /g, "_")}> {category.Title + ' '} </Link></div>
            })}
        </div>
    )
}

export default Categories