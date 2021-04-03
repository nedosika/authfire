import {db} from "../firebase/firebase";

export const DATA_REQUEST = "DATA_REQUEST";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_FAILURE = "DATA_FAILURE";

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

export const getData = path => dispatch => {
    dispatch(requestData());
    db.ref(path)
        .get()
        .then((data) => dispatch(receiveData(data.val())))
        .catch((msg) => dispatch(dataError(msg)))
};