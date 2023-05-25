import {dragonActions} from "../reducers/dragonReducer.js";
import {addLog} from "../actions/LogActions.js";
import {DragonSelector} from "../selectors/DragonSelectors.js";
import {taskActions} from "../reducers/taskReducer.js";

const logMiddleware = (store) => (next) => (action) => {
    const returnAction = next(action)

    if(action.type === dragonActions.ADD_DRAGON || action.type === dragonActions.REMOVE_DRAGON /*|| action.type === taskActions.TASK_ADD*/) {
        /*
        if(action.type === taskActions.TASK_ADD) {
            store.dispatch(addLog({count: 0, action: action.type, name: action.payload.task}))
            return returnAction
        }
        */

        const count = DragonSelector(store.getState()).count
        store.dispatch(addLog({count: count, action: action.type, name: action.payload}))
    }

    return returnAction
}

export default logMiddleware