import {dragonActions} from "../reducers/dragonReducer.js";
import {addLog} from "../actions/LogActions.js";
import {DragonSelector} from "../selectors/DragonSelectors.js";
import {taskActions} from "../reducers/taskReducer.js";
import moment from "moment";
import {knightActions} from "../reducers/knightReducer.js";
import {KnightSelector} from "../selectors/KnightSelectors.js";

const getTime = () => {
    return moment().format('DD MM YYYY à hh:mm:ss')
}

const logMiddleware = (store) => (next) => (action) => {
    const returnAction = next(action)

    if(
        action.type === dragonActions.ADD_DRAGON ||
        action.type === dragonActions.REMOVE_DRAGON
        /*|| action.type === taskActions.TASK_ADD*/ ||
        action.type === knightActions.ADD_KNIGHT ||
        action.type === knightActions.REMOVE_KNIGHT

    ) {
        /*
        if(action.type === taskActions.TASK_ADD) {
            store.dispatch(addLog({count: 0, action: action.type, name: action.payload.task}))
            return returnAction
        }
        */
        if (action.type === dragonActions.ADD_DRAGON || action.type === dragonActions.REMOVE_DRAGON) {
            const count = DragonSelector(store.getState()).count
            store.dispatch(addLog({count: count, action: action.type, name: action.payload, date: getTime(), store: 'dragon'}))
        }
        if (action.type === knightActions.ADD_KNIGHT || action.type === knightActions.REMOVE_KNIGHT) {
            const count = KnightSelector(store.getState()).count
            store.dispatch(addLog({count: count, action: action.type, name: action.payload, date: getTime(), store: 'chevalier'}))
        }

    }

    return returnAction
}

export default logMiddleware