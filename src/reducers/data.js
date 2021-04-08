import {DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE, ADD_PRODUCT} from "../actions";
import {SEND_DATA_FAILURE, SEND_DATA_REQUEST, SEND_DATA_SUCCESS} from "../actions/sendData";

export default (
    state = {
        isFetchingData: false,
        dataError: false,
        firestore: {
            goods: [],
            categories: []
        }
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
        case ADD_PRODUCT:
            return {
                ...state,
                firestore: {
                    ...state.firestore,
                    goods: [
                        ...state.firestore.goods,
                        action.product
                    ]
                }
            }
        default:
            return state;
    }
}