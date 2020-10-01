
import { combineReducers } from 'redux';
import HomeReduser from './../Reducers/Home';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    Home: HomeReduser,
    form: formReducer
})

export default reducers