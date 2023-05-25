import {ADD_LOG, PURGE_LOG} from "../reducers/logReducer.js";

export const addLog = (log) => {
    return {
        type: ADD_LOG,
        payload: log
    }
}

export const purgeLog = () => {
    return {
        type: PURGE_LOG
    }
}