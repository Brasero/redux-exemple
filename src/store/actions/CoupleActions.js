import {ADD_COUPLE, REMOVE_COUPLE} from "../reducers/coupleReducer.js";

export const addCouple = (couple) => {
    return {
        type: ADD_COUPLE,
        payload: couple
    }
}

export const removeCouple = (couple) => {
    return {
        type: REMOVE_COUPLE,
        payload: couple
    }
}