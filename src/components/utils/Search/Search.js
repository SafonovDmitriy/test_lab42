import React from 'react';
import { Button, Container, InputGroup, Row } from 'react-bootstrap';
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
                for (var key in prod) {
                    if (prod[key].toString().toUpperCase().indexOf(formDate.search.toUpperCase()) > -1) {
                        return arr.push(prod)
                    }
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
    const clearField = () => {
        props.dispatch(reset("search"));
        props.Search([], undefined)
    }
    return (
        <form onSubmit={handleSubmit}>

            <Container>
                <Row>
                    <InputGroup className="mb-3">
                        <Field name="search" placeholder='Search' component="input" type="text" className={s.SearchInput} />

                        <InputGroup.Append>
                            <Button type="button" onClick={() => clearField()} className={s.subButton} variant="light">Del</Button>
                            <Button type="submit" className={s.subButton} variant="warning">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>


                </Row>
            </Container>
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