const initialState = {
    loginStatus: {
        message: "",
        failed: false
    },
    forgotPassword: {
        message: "",
        failed: true
    },
    resetPassword: {
        message: "",
        failed: false
    }
}
export default function authenticateReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN": return { ...state, loginStatus: { ...state.login, message: payload.message, failed: payload.failed } }
        case "FORGOT_PASSWORD": return { ...state, forgotPassword: { ...state.login, message: payload.message, failed: payload.failed } }
        case "RESET_PASSWORD": return { ...state, resetPassword: { ...state.login, message: payload.message, failed: payload.failed } }
        default: return state;
    }
}