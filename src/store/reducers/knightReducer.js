const initialState = {
    knights: [
        "Arthur",
        "Dardagnan",
        "Leodagan"
    ],
    count: 3,
    message: ''
}

export const knightActions = {
    ADD_KNIGHT: 'ADD_KNIGHT',
    REMOVE_KNIGHT: 'REMOVE_KNIGHT',
    REVERSE_KNIGHT: 'REVERSE_KNIGHT'
}


const knightReducer = (state = initialState, action) => {
    switch(action.type) {
        case knightActions.ADD_KNIGHT:
            if(action.payload.trim() === '') {
                return {
                    ...state,
                    message: 'Merci de saisir un nom.'
                }
            }

            if(state.knights.includes(action.payload)) {
                return {
                    ...state,
                    message: `Le chevalier ${action.payload.toUpperCase()} existe déjà.`
                }
            }

            return {
                ...state,
                knights: state.knights.concat(action.payload),
                count: ++state.count,
                message: ''
            }

        case knightActions.REMOVE_KNIGHT:
            return {
                ...state,
                knights: state.knights.filter((knight) => knight !== action.payload),
                count: --state.count,
                message: ""
            }

        case knightActions.REVERSE_KNIGHT:
            return {
                ...state,
                knights: state.knights.reverse()
            }

        default:
            return state
    }
}
export default knightReducer