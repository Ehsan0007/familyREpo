import AuthActions from '../actions/authAction'

const INITIAL_STATE = {
    activeUser: {},
    isError: { status: false, msg: '' },
    isProcessing: false,
    isAuthenticated: false,
    isRegistered: false,
    islogged: false,
    loading: false
};

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.SIGNUP_USER:
            return { ...state, isProcessing: true, isError: { status: false, msg: '' } };
        case AuthActions.SIGNUP_USER_SUCCESSFULL:
            return { ...state, isProcessing: false, isRegistered: true, loading: true };
        case AuthActions.SIGNUP_USER_FAIL:
            return { ...state, isProcessing: false, isError: { status: true, msg: action.payload } };
        case AuthActions.LOGIN:
            return { ...state, isProcessing: true, isError: { status: false, msg: '' } };
        case AuthActions.LOGIN_USER_SUCCESSFULL:
            return { ...state, isProcessing: false, isAuthenticated: true, islogged: true, activeUser: action.payload };
        case AuthActions.LOGIN_FAILER:
            return { ...state, isProcessing: false, isAuthenticated: false, activeUser: {}, isError: { status: true, msg: action.payload } }
        default:
            return state;

    }
}

export default AuthReducer;