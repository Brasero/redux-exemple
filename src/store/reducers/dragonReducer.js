const initialState = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    count: 3,
    message: ''
}

export const dragonActions = {
    ADD_DRAGON: 'ADD_DRAGON',
    REMOVE_DRAGON: 'REMOVE_DRAGON',
    REVERSE_DRAGON: 'REVERSE_DRAGON'
}


const dragonReducer = (state = initialState, action) => {
    switch(action.type) {
        case dragonActions.ADD_DRAGON:
            if(action.payload.trim() === '') {
                return {
                    ...state,
                    message: 'Merci de saisir un nom.'
                }
            }

            if(state.dragons.includes(action.payload)) {
                return {
                    ...state,
                    message: `Le dragon ${action.payload.toUpperCase()} existe déjà.`
                }
            }

            return {
                ...state,
                dragons: state.dragons.concat(action.payload),
                count: ++state.count,
                message: ''
            }

        case dragonActions.REMOVE_DRAGON:
            return {
                ...state,
                dragons: state.dragons.filter((dragon) => dragon !== action.payload),
                count: --state.count,
                message: ""
            }

        case dragonActions.REVERSE_DRAGON:
            return {
                ...state,
                dragons: state.dragons.reverse()
            }

        default:
            return state
    }
}
export default dragonReducer