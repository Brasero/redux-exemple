
/*

import {createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";

let nextId = 3

const initialState = [
    {
        id: 1,
        task: 'tache 1',
        done: true
    },
    {
        id: 2,
        task: 'tache 2',
        done: false
    }
]

const actions = {
    TASK_ADD: 'TASK_ADD'
}


const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.TASK_ADD:
            return [...state, {id: nextId++, task: action.payload, done: false}]
        default:
            return state
    }
}

const store = createStore(
    taskReducer,
    composeWithDevTools()
)

store.subscribe(() => {console.log(store.getState())})

store.dispatch({type: actions.TASK_ADD, payload: 'tache 3'})
store.dispatch({type: actions.TASK_ADD, payload: 'tache 3'})
store.dispatch({type: actions.TASK_ADD, payload: 'tache 3'})
*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
