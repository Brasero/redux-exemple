import {taskActions} from "../reducers/taskReducer.js";
import wait from "../../wait.js";

//Une action doit retourner l'objet à passer à la methode dispatch
export const toggleTask = (task) => {
    return {
        type: taskActions.TASK_TOGGLE,
        payload: task
    }
}

export const removeTask = (task) => {
    return {
        type: taskActions.TASK_REMOVE,
        payload: task.id
    }
}

export const addTask = (text) => {
    return async (dispatch) => {
        await wait(2000)
        dispatch({
            type: taskActions.TASK_ADD,
            payload: text
        })
    }
}