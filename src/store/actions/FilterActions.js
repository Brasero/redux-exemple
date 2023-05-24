import {CHANGE_FILTER} from "../reducers/filterReducer.js";

export const ChangeFilter = (filter) => {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}