const appReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.payload
            }
        }
        case "CHANGE_SIDEBAR": {
            return {
                ...state,
                sidebar: !state.sidebar
            }
        }
        case "CHANGE_MUSIC": {
            return {
                ...state,
                currentMusic: action.payload
            }
        }

    }
}

export default appReducer;