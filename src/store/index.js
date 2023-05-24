import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import taskReducer from "./reducers/taskReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import dragonReducer from "./reducers/dragonReducer.js";
import thunk from "redux-thunk";



const store = createStore(
    combineReducers({
        tasks: taskReducer,
        filter: filterReducer,
        dragons: dragonReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
