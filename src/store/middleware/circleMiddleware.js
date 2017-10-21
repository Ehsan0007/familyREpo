import { Observable } from "rxjs"
import AuthActions from '../actions/authAction'
import { Actions } from 'react-native-router-flux'
import firebasedb from './../../Component/config/dbConfig';

export default class CircleEpic {


    //Epic middle for Signup
    static circleEpic(actions$) {
        return actions$.ofType(AuthActions.CREATE_CIRCLE)
            .switchMap(({ payload }) => {
                var db = firebasedb.auth().currentUser.uid;
                var key = firebasedb.database().ref('Circle/').push().key;
                let circle = {
                    payload, admin: db, key1: key, members: [db]
                }
                return firebasedb.database().ref('Circle/' + key).set(circle)
                    .then((arr) => {
                        return { type: AuthActions.CREATE_CIRCLE_SUCCESSFULL, payload: arr }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.CREATE_CIRCLE_FAIL
                        })
                    })
            })
    }
    static circleListEpic(actions$) {
        return actions$.ofType(AuthActions.CIRCLE_LIST)
            .switchMap(({ }) => {
                return firebasedb.database().ref('Circle/').on('child_added', (snap) => {
                    var obj = snap.val();
                    console.log("lalla", obj)
                })
                    .then((obj) => {
                        console.log("Response", obj)
                        return { type: AuthActions.CREATE_CIRCLE_SUCCESSFULL, payload: obj }
                    })
                    .catch(err => {
                        return Observable.of({
                            type: AuthActions.CREATE_CIRCLE_FAIL
                        })
                    })
            })
    }
}   