export const SET_SEL_TAB = 'SET_SEL_TAB'
export const actSetSelTabOK = selTab => ({
    type: SET_SEL_TAB,
    payload: { selTab },
})
export const actSetSelTab = arg_sel_tab => {
    return dispatch => {
        dispatch(actSetSelTabOK(arg_sel_tab))
    }
}