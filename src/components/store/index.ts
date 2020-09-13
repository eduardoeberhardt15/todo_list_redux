import {createStore, Store} from 'redux';
import {reducer} from "./todoReducer";
import {loadState, saveState} from "./localStorage";


const state = loadState();
const store:Store = createStore(reducer, state);
store.subscribe(()=>{
    saveState(store.getState());
})

export default store;

