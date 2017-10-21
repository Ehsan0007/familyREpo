
export default class AuthActions {

    static LOGIN_USER = "LOGIN_USER";
    static LOGIN_USER_SUCCESSFULL = "LOGIN_USER_SUCCESSFULL";
    static LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

    static SIGNUP_USER = "SIGNUP_USER";
    static SIGNUP_USER_SUCCESSFULL = "SIGNUP_USER_SUCCESSFULL";
    static SIGNUP_USER_FAIL = "SIGNUP_USER_FAIL";

    static LOGOUT = 'LOGOUT';
    static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

    static CREATE_CIRCLE = "CREATE_CIRCLE";
    static CREATE_CIRCLE_SUCCESSFULL = "CREATE_CIRCLE_SUCCESSFULL";
    static CREATE_CIRCLE_FAIL = "CREATE_CIRCLE_FAIL";

    static loginUser(data) {
        return {
            type: AuthActions.LOGIN_USER,
            payload: data
        }
    }

    static circle(data) {
        return {
            type: AuthActions.CREATE_CIRCLE,
            payload: data
        }
    }
    static circleList() {
        return {
            type: AuthActions.CIRCLE_LIST,
        }
    }


    static signupUser(data) {
        debugger;
        return {
            type: AuthActions.SIGNUP_USER,
            payload: data
        }
    }
    static signupUserSucess(data) {
        return {
            type: AuthActions.SIGNUP_USER_SUCCESSFULL,
            payload: data
        }
    }


}