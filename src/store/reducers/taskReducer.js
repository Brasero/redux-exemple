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

export const taskActions = {
    TASK_ADD: 'TASK_ADD',
    TASK_TOGGLE: 'TASK_TOGGLE',
    TASK_REMOVE: 'TASK_REMOVE'
}


const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskActions.TASK_ADD:
            return [...state, {id: nextId++, task: action.payload, done: false}]
        case taskActions.TASK_TOGGLE:
            return state.map((t) => {
                if(t.id === action.payload.id) {
                    return {...t, done: !t.done}
                }
                return t
            })
        case taskActions.TASK_REMOVE:
            return state.filter((task) => task.id !== action.payload)

        default:
            return state
    }
}

export default taskReducer