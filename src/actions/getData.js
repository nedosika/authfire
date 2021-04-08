import {db} from "../firebase/firebase";

export const DATA_REQUEST = "DATA_REQUEST";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";
export const ADD_PRODUCT = "ADD_PRODUCT";

const requestData = () => {
    return {
        type: DATA_REQUEST
    }
}

const receiveData = (data) => {
    return {
        type: DATA_SUCCESS,
        data
    }
}

const dataError = (msg) => {
    return {
        type: DATA_FAILURE,
        msg
    }
}

export const getData = () => dispatch => {
    dispatch(requestData());
    db.ref()
        .get()
        .then((data) => dispatch(receiveData(data.val())))
        .catch((msg) => dispatch(dataError(msg)))
};

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}
