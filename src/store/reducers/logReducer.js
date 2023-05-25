const initialState = {
    logs: []
}

export const ADD_LOG = 'ADD_LOG'
export const PURGE_LOG = 'PURGE_LOG'


const logReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_LOG:
            const logs = state.logs.map(log => ({...log}))

            logs.push({...action.payload})

            return {
                ...state,
                logs: logs
            }

        case PURGE_LOG:
            return initialState


        default:
            return state
    }
}

export default logReducer