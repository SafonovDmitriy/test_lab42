import { createStore } from 'redux';
import reducers from './combine';




let store = createStore(reducers);
window.store = store;


export default store;