import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {getData, verifyAuth} from "./actions/";
import rootReducer from "./reducers";

export default function configureStore(persistedState) {
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    store.dispatch(getData("categories"));
    return store;
}