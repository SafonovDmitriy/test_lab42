import React, { useState } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { searchSave } from './../../../Redux/Reducers/Home';
import s from './Search.module.css';

const Search = (props) => {
    const onSubmit = (formDate) => {
        if (formDate.search === undefined) {
            return props.Search(undefined)
        } else {
            let text = formDate.search.split('')

            for (let i = 0; i <= text.length; i++) {
                if (text[i]) {

                }
                if (text[0] === " ") {
                    text.shift()
                }
                if (text[text.length - 1] === " ") {
                    text.pop()
                }
            }
            if (text.length !== 0) {
                let newSearch = [text[0]]
                text.reduce((first, second) => {
                    if (first[first.length - 1] !== " " || second !== " ") {
                        newSearch.push(second)
                    }
                    return first + second
                })
                props.Search(newSearch.join(''))
            }


        }
    }
    return <SearchForm onSubmit={onSubmit} {...props} />
}

let SearchForm = props => {
    const { handleSubmit } = props
    let [toggleSearch, setToggleSearch] = useState(false)
    const clearField = () => {
        props.dispatch(reset("search"));
        props.Search(undefined)
    }

    return <form onSubmit={handleSubmit}>
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
}

SearchForm = reduxForm({
    form: 'search'
})(SearchForm)
let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => {
    return {
        Search: (SearchText) => dispatch(searchSave(SearchText))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)