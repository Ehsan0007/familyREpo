import { combineReducers, applyMiddleware, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import AuthEpic from './middleware/epicMiddleware'
import AuthReducer from './reducers/epicReducer'
import CircleReducer from './reducers/circleReducer'
import CircleEpic from './middleware/circleMiddleware'

export const rootEpic = combineEpics(
    // AuthEpic.loginEpic,
    AuthEpic.signupEpic,
    AuthEpic.loginEpic,
    CircleEpic.circleEpic,
    CircleEpic.circleListEpic,
    
);

export {
    AuthEpic
    // other Middlewares here
}

const epicMiddleware = createEpicMiddleware(rootEpic);

export const rootReducer = combineReducers({
    epic: AuthReducer,
    circleReducer: CircleReducer
    // more reducers go here
})

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer)