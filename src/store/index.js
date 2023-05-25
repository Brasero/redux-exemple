import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import taskReducer from "./reducers/taskReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import dragonReducer from "./reducers/dragonReducer.js";
import logReducer from "./reducers/logReducer.js";
import knightReducer from "./reducers/knightReducer.js";

import logMiddleware from "./middlewares/logMiddleware.js";
import thunk from "redux-thunk";
import coupleReducer from "./reducers/coupleReducer.js";
import coupleMiddleware from "./middlewares/coupleMiddleware.js";

/*
const detailedLogMiddleware = (store) => {
    return (next) => {
        return (action) => {

        }
    }
}
*/
/*
const logMiddleware = (store) => (next) => (action) => {
    console.log('New action : ', action)

    if (action.type === 'ADD_DRAGON') {
        store.dispatch(addTask(action.payload))
    }

    next(action)
}*/

const store = createStore(
    combineReducers({
        tasks: taskReducer,
        filter: filterReducer,
        dragons: dragonReducer,
        logs: logReducer,
        knights: knightReducer,
        couple: coupleReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk, logMiddleware, coupleMiddleware)
    )
)

export default store
