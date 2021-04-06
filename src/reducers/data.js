import {DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE} from "../actions";

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
        default:
            return state;
    }
}