import { SAVE_SHIPMENTS } from './shipments.types'

const INITIAL_STATE = {
    lists : []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action?.type){
        case SAVE_SHIPMENTS: {
            return {
                ...state,
                lists: action?.payload
            }
        }

        default: return state
    }


}

export default reducer