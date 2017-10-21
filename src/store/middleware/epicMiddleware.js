import { Observable } from "rxjs"
import AuthActions from '../actions/authAction'
import Path from '../../config/path'
import { HttpService } from '../../service/http'
import { Actions } from 'react-native-router-flux'
import firebasedb from './../../Component/config/dbConfig';

// import { ajax } from Rx.Observable

export default class AuthEpic {

    //Epic middleware for login

    //Epic middle for Signup
    static signupEpic(actions$) {
        return actions$.ofType(AuthActions.SIGNUP_USER)
            .switchMap(({ payload }) => {
                console.log(payload)
                return firebasedb.auth().createUserWithEmailAndPassword(payload.username, payload.password)
                    .then((arr) => {
                        return { type: AuthActions.SIGNUP_USER_SUCCESSFULL, payload: arr }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.SIGNUP_USER_FAIL
                        })
                    })
            })
    }
    static loginEpic(actions$) {
        return actions$.ofType(AuthActions.LOGIN_USER)
            .switchMap(({ payload }) => {
                console.log(payload)
                return firebasedb.auth().signInWithEmailAndPassword(payload.username, payload.password)
                    .then((arr) => {
                        return { type: AuthActions.LOGIN_USER_SUCCESSFULL, payload: arr }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.SIGNUP_USER_FAIL
                        })
                    })
            })

    }
}   