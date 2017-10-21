import AuthActions from '../actions/authAction'

const INITIAL_STATE = {
    circle: {},
    circleList: {},
    loading: false,
    error: '',
    success: false
};

function CircleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.CREATE_CIRCLE:
            return { ...state };
        case AuthActions.CREATE_CIRCLE_SUCCESSFULL:
            return { ...state, circle: action.payload, success: true };
        case AuthActions.CREATE_CIRCLE_FAIL:
            return { ...state, error: action.payload };
        case AuthActions.CIRCLE_LIST:
            return { ...state };
        case AuthActions.CIRCLE_LIST_SUCCESSFULL:
            return { ...state, circleList: action.payload };
        case AuthActions.CIRCLE_LIST_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;

    }
}

export default CircleReducer;