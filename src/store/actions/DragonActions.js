import {dragonActions} from "../reducers/dragonReducer.js";

export const addDragon = (name) => {
    return {
        type: dragonActions.ADD_DRAGON,
        payload: name
    }
}

export const removeDragon = (name) => {
    return {
        type: dragonActions.REMOVE_DRAGON,
        payload: name
    }
}

export const reverseDragon = () => {
    return {
        type: dragonActions.REVERSE_DRAGON
    }
}