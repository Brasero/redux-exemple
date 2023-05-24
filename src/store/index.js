import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import taskReducer from "./reducers/taskReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import thunk from "redux-thunk";



const store = createStore(
    combineReducers({
        tasks: taskReducer,
        filter: filterReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
