import {knightActions} from "../reducers/knightReducer.js";

export const addKnight = (name) => {
    return {
        type: knightActions.ADD_KNIGHT,
        payload: name
    }
}

export const removeKnight = (name) => {
    return {
        type: knightActions.REMOVE_KNIGHT,
        payload: name
    }
}

export const reverseKnight = () => {
    return {
        type: knightActions.REVERSE_KNIGHT
    }
}