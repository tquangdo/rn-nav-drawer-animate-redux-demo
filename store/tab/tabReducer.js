import { SET_SEL_TAB } from './tabActions'

const tabReducer = (state = { selTab: '', }, action) => {
    switch (action.type) {
        case SET_SEL_TAB:
            return {
                ...state,
                selTab: action.payload.selTab,
            }

        default:
            return state
    }
}

export default tabReducer
