import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm, reset } from 'redux-form';
import { searchSave } from './../../../Redux/Reducers/Home';
import s from './Search.module.css';

const Search = (props) => {

    const onSubmit = (formDate) => {
        if (formDate.search !== undefined) {
            let arr = []
            props.listProduct.filter(prod => {

                if (prod.Title.toString().toUpperCase().indexOf(formDate.search.toUpperCase()) > -1) {
                    return arr.push(prod)
                }

                return undefined
            })
            props.history.push('/Home');

            props.Search(arr, formDate.search)
        }

    }


    return <SearchForm onSubmit={onSubmit} {...props} />
}


let SearchForm = props => {
    const { handleSubmit } = props
    let [toggleSearch, setToggleSearch] = useState(false)
    const clearField = () => {
        props.dispatch(reset("search"));
        props.Search([], undefined)
    }
    return (

        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Append>
                    <Field className={toggleSearch ? s.activeSearch + ' ' + s.SearchInput : s.SearchInput} name="search" placeholder='Search' component="input" type="text" onBlur={() => setToggleSearch(false)} onFocus={() => setToggleSearch(true)} />
                    <Button type="button" onClick={() => clearField()} variant="light">
                        <div className={s.del}></div>
                    </Button>
                    <Button type="submit" variant="warning">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </form>
    )
}

SearchForm = reduxForm({
    form: 'search'
})(SearchForm)
let mapStateToProps = (state) => {
    return {
        listProduct: state.Home.product,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        Search: (SearchArr, SearchText) => dispatch(searchSave(SearchArr, SearchText))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search))