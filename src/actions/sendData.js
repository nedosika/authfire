import {db} from "../firebase/firebase";

export const SEND_DATA_REQUEST = "SEND_DATA_REQUEST";
export const SEND_DATA_SUCCESS = "SEND_DATA_SUCCESS";
export const SEND_DATA_FAILURE = "SEND_DATA_FAILURE";

const sendDataRequest = () => {
    return {
        type: SEND_DATA_REQUEST
    }
}

const sendDataSuccess = () => {
    return {
        type: SEND_DATA_SUCCESS,
    }
}

const sendDataError = (msg) => {
    return {
        type: SEND_DATA_FAILURE,
        msg
    }
}

export const sendData = () => (dispatch, getState) => {
    dispatch(sendDataRequest());
    console.log('current state:', getState().data.firestore);
    db.ref()
        .set({...getState().data.firestore})
        .then(() => dispatch(sendDataSuccess()))
        .catch((msg) => dispatch(sendDataError(msg)))
};
