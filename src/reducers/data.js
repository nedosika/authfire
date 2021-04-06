import {DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE} from "../actions";
import {SEND_DATA_FAILURE, SEND_DATA_REQUEST, SEND_DATA_SUCCESS} from "../actions/sendData";

export default (
    state = {
        isFetchingData: false,
        dataError: false,
        firestore: {}
    },
    action
) => {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                ...state,
                isFetchingData: true,
                dataError: false,
            };
        case DATA_SUCCESS:
            return {
                ...state,
                isFetchingData: false,
                dataError: false,
                firestore: action.data
            };
        case DATA_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                dataError: true
            };
        case SEND_DATA_REQUEST:
            return {
                ...state,
                isSendingData: true,
                dataError: false
            }
        case SEND_DATA_SUCCESS:
            return {
                ...state,
                isSendingData: false,
                dataError: false,
            }
        case SEND_DATA_FAILURE:
            return {
                ...state,
                isSendingData: false,
                dataError: true
            }
        default:
            return state;
    }
}