const initialState = {
    couple: [],
    coupleMessage: ''
}

export const ADD_COUPLE = "ADD_COUPLE"
export const REMOVE_COUPLE = "REMOVE_COUPLE"

const coupleReducer = (state = initialState, action) => {
    switch(action.type) {

        case ADD_COUPLE:

            if (action.payload.dragon === '' || action.payload.knight === '') {
                return {
                    ...state,
                    coupleMessage: 'Merci de choisir un chevalier ET un dragon'
                }
            }

            const couple = state.couple.map((obj) => {
                return {
                    ...obj
                }
            })

            couple.push({...action.payload})

            return {
                ...state,
                couple: couple,
                coupleMessage: ''
            }

        case REMOVE_COUPLE:
            return {
                ...state,
                couple: state.couple.filter((obj) => obj.dragon !== action.payload.dragon && obj.knight !== action.payload.dragon)
            }


        default:
            return state
    }
}

export default coupleReducer