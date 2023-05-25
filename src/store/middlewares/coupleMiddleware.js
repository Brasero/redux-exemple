import {ADD_COUPLE, REMOVE_COUPLE} from "../reducers/coupleReducer.js";
import {addDragon, removeDragon} from "../actions/DragonActions.js";
import {addKnight, removeKnight} from "../actions/KnightActions.js";

const coupleMiddleware = (store) => (next) => (action) => {

    if(action.type === ADD_COUPLE && action.payload.dragon !== '' && action.payload.knight === '') {
        store.dispatch(removeDragon(action.payload.dragon))
        store.dispatch(removeKnight(action.payload.knight))
    }

    if(action.type === REMOVE_COUPLE) {
        store.dispatch(addKnight(action.payload.knight))
        store.dispatch(addDragon(action.payload.dragon))
    }

    next(action)
}

export default coupleMiddleware