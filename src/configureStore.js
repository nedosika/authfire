import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {verifyAuth} from "./actions/";
import rootReducer from "./reducers";
import logger from 'redux-logger';

export default function configureStore() {
    const persistedState = localStorage.getItem('reduxState')
        ? JSON.parse(localStorage.getItem('reduxState'))
        : {};

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware, logger)
    );
    store.subscribe(()=>{
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    })
    store.dispatch(verifyAuth());
    return store;
}