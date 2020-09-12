import {createStore, Store} from 'redux';

import {reducer} from "./todoReducer";

const store:Store = createStore(reducer);

export default store;